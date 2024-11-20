import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../config/firebase";

function HostPage() {
    const params = useParams()
    const [gameData, setGameData] = useState(null)
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        onSnapshot(collection(db, params.id), (snap) => {
            let data = snap.docs.map((doc) => ({ ...doc.data(), id: doc.id}))
            setGameData(data.filter((doc) => doc.id === "data")[0])
            let done = false
            let i = 0
            while (!done) {
                if(data[i].id === "data") done = true
                else i++
            }
            delete data[i]
            setUserData(data)
        })
    })
    const quizDone = () => {
        updateDoc(doc(db, params.id, "data"), { status: "done" })
    }
    const getSummary = () => {
        if(userData){
            let data = userData
            let list = []
        for (let i = 0; i < data.length - 1; i++) {
            let element = data[i];
            console.log(data)
            element.score = 0
            for (let i2 = 0; i2 < element?.answers?.length; i2++) {
                const element2 = element.answers[i2];
                if(element2 === true){
                    if(element.score){
                        element.score++
                    }else element.score = 1
                }
            }
            list.push(element)
        }
        list.sort((a, b) => b.score - a.score)
        return ( 
            <div>
                { list.map((data, index) => (
                    <h1>{ index + 1 }. Platz mit { data.score } Punkten: { data.name }</h1>
                )) }
            </div>
         )
        }else return ( <div>Loader...</div> )
    }
    return ( <div className="game-content" style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "100px", textAlign: "center" }}>
        	{gameData?.status === "quiz" ? <div>
                <h1>Quiz-ID: { params.id }</h1>
                { userData?.map((player) => (
                    <div key={player.id}>
                        <label htmlFor="progress">{player.name}</label><br />
                        <progress max={gameData?.questions?.length} value={player.doneQ}></progress>
                    </div> 
                )) }
                <button onClick={() => quizDone()}>Quiz fertigstellen</button>
            </div> : <div>
                { getSummary() }
            </div>}
    </div> );
}

export default HostPage;