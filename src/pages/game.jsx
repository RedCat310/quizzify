import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth"
import { auth, db } from '../config/firebase'
import { collection, doc, getDoc, onSnapshot, setDoc } from "firebase/firestore"

function Game(){
    const params = useParams()
    const gameID = params.id
    const [page, setPage] = useState(false);
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState("")
    const [score, setScore] = useState(0)

    useEffect(() => {
        async function rejoin() {
            setPage(true)
            let rawData = await getDoc(doc(db, gameID, localStorage.getItem("userID")))
            let data = rawData.data()
            setUsername(data.displayName)
            onSnapshot(collection(db, gameID), (snap) => {
                let data = snap.docs.map((doc) => ({...doc.data(), id: doc.id}))
                let score = data.filter((getdata) => getdata.id === localStorage.getItem("userID"))
                setScore(score[0].score)
            })
        }
        onAuthStateChanged(auth, (data) => {
            setUser(data)
            if(data){
                setUsername(data.displayName)
            }
        })
        if(localStorage.getItem("userID")) rejoin()
    })

    const join = () => {
        localStorage.setItem("gameID", gameID)
        localStorage.setItem("userID", crypto.randomUUID())
        setDoc(doc(db, gameID, localStorage.getItem("userID")), {
            displayName: username,
            score: 0
        })
        setPage(true)
        onSnapshot(collection(db, gameID), (snap) => {
            let data = snap.docs.map((doc) => ({...doc.data(), id: doc.id}))
            let score = data.filter((getdata) => getdata.id === localStorage.getItem("userID"))
            setScore(score[0].score)
        })
    }

    return(
        <div>
            {page ? <div className="footer" style={{position: "fixed", bottom: '10px', fontSize: "20px", left: '10px', backgroundColor: 'white', color: 'black', padding: '10px', borderRadius: '10px'}}>
                <span>{ username }: { score }</span>
            </div> : <div>
                <input type="text" placeholder="Benutzername eingeben" onChange={(e) => setUsername(e.target.value)}  value={username} /><br />
                <button onClick={() => join()}>Weiter</button>
            </div> }
        </div>
    )
}

export default Game