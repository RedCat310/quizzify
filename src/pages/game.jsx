import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth"
import { auth, db } from '../config/firebase'
import { collection, doc, getDoc, onSnapshot, setDoc } from "firebase/firestore"
import '../styles/game.scss'
import userPic from '../assets/user_picture.png'
import '../styles/general.scss'

function Game(){
    const params = useParams()
    const navigate = useNavigate()
    const gameID = params.id
    const [page, setPage] = useState(null);
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState("")
    const [score, setScore] = useState(0)
    const [gameData, setGameData] = useState(null)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [PicMenu, setPicMenu] = useState({
        all: {display: "none"}
    })

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
                let game = data.filter((getdata) => getdata.id === "data")
                setGameData(game[0])
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
            let game = data.filter((getdata) => getdata.id === "data")
                setGameData(game[0])
        })
    }
    const displayData = () => {
        let firstLetter = ''
        if(gameData?.status){
            firstLetter = Array.from(gameData?.status)[0];
        }
        if(gameData?.status === "waiting-start") return <div>
            { username } <br /> Du bist dabei! du solltest deinen Namen jetzt bei deinem/r Moderator:in sehen
        </div>
        else if(!gameData) return null
        else if(firstLetter === 'q') return <div>
            { gameData.questions[parseInt(Array.from(gameData?.status)[1])].question }
            <div>
                { gameData?.questions[parseInt(Array.from(gameData?.status)[1])]?.answers?.map((element) => (
                    <div key={element.id}>
                        <input type="radio" name="answers" onClick={() => setSelectedAnswer(element.id)} />
                        <label htmlFor="input">{ element.value }</label>
                    </div>
                )) }
            </div>
        </div>
        else return <span>Schade, da hat etwas nicht geklappt. versuche deine Seite neu zu laden</span>
    }

    const openPicWindow = () => {
        setPicMenu({
            all: {display: "block"}
        })
    }

    return(
        <div>
            {page ? <div>
                <div className="game-content" style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "100px", textAlign: "center" }}>
                    { displayData() }
                </div>
                <span className="footer" style={{position: "fixed", bottom: '10px', fontSize: "20px", left: '10px', backgroundColor: 'white', color: 'black', padding: '10px', borderRadius: '10px'}}>{ username }: { score }</span>
            </div> : <div className="userInf">
                <div className="userPic">
                    <div className="current-userPic">
                        <img className="active-userPic" src={userPic} onClick={() => openPicWindow()}></img>
                        <i class="fa-solid fa-pen" onClick={() => openPicWindow()}></i>
                    </div>
                </div>
                <div className="inf-join">
                    <input type="text" placeholder="Benutzername eingeben" onChange={(e) => setUsername(e.target.value)}  value={username} /><br />
                    <button onClick={() => join()} className="join">Weiter</button>
                    <div className="leave">Verlassen</div>
                </div>
                <div className="dropdown-userPic" style={PicMenu.all}>
                    <div className="pictures-dropdown">
                        <img className="pic" src={userPic}></img>
                        <img className="pic" src={userPic}></img>
                        <img className="pic" src={userPic}></img>
                        <img className="pic" src={userPic}></img>
                        <img className="pic" src={userPic}></img>
                        <img className="pic" src={userPic}></img>
                        <img className="pic" src={userPic}></img>
                        <img className="pic" src={userPic}></img>
                        <img className="pic" src={userPic}></img>
                        <img className="pic" src={userPic}></img>
                        <img className="pic" src={userPic}></img>
                        {/* Bilder Links müssen noch geändert werden */}
                    </div>
                </div>
            </div> }
            <button onClick={() => {
                navigate("/")
                localStorage.removeItem("gameID")
                localStorage.removeItem("userID")
            }}>Verlassen</button>
        </div>
    )
}

export default Game