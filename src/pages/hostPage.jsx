import { collection, onSnapshot } from "firebase/firestore";
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
    return ( <div className="game-content" style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "100px", textAlign: "center" }}>
        	<div>
                <h1>Quiz-ID: { params.id }</h1>
                { userData?.map((player) => (
                    <div key={player.id}>
                        <label htmlFor="progress">{player.name}</label><br />
                        <progress max={gameData?.questions?.length} value={player.doneQ}></progress>
                    </div>
                )) }
                <button>Quiz fertigstellen</button>
            </div>
    </div> );
}

export default HostPage;