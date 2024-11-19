import { useNavigate, useParams } from "react-router-dom"
import '../styles/game.scss'
import userPic from '../assets/user_picture.png'
import '../styles/general.scss'
import { useEffect, useState } from "react"
import { collection, doc, getDoc, onSnapshot, setDoc, updateDoc } from "firebase/firestore"
import { db } from "../config/firebase"
import { CountdownCircleTimer } from "react-countdown-circle-timer"

function Game(){
    const params = useParams()
    const navigate = useNavigate()
    const [picMenu, setPicMenu] = useState({display: 'none'})
    const [username, setUsername] = useState("")
    const [page, setPage] = useState(false)
    const [curentQuestion, setCurentQuestion] = useState(null);
    const [userID, setUserID] = useState(null);
    const [done, setDone] = useState(false);

    const openPicWindow = () => {
        setPicMenu({display: "block"})
    }
    const [game, setGame] = useState(null);
    const [player, setPlayer] = useState(null);
    useEffect(() => {
        onSnapshot(collection(db, params.id), (snap) => {
            let docs = snap.docs.map((doc) => ({...doc.data(), id: doc.id}))
            setGame(docs.filter((doc) => doc.id === "data")[0])
            setPlayer(docs.filter((doc) => doc.id === userID)[0])
        })
    })

    const startQuiz = async () => {
        setPage(true)
        setCurentQuestion(0)
        let id = crypto.randomUUID()
        setUserID(id)
        setDoc(doc(db, params.id, id), {
            name: username,
            doneQ: 0
        })
    }
    const setAns = (ans) => {
        let newData = player.answers
        if(newData){
            newData[curentQuestion] = ans
        }
        else{
            newData = [ans]
        }
        updateDoc(doc(db, params.id, userID), {
            answers: newData,
            doneQ: player.doneQ + 1
        })
        if(game.questions[curentQuestion + 1]){setCurentQuestion(curentQuestion + 1) }
        else setDone(true)
    }
    return(
        <div>
            {page ? <div>
                { done ? <div>
                    fertig!
                </div> : <div>
                    <p className="question">{ game?.questions[curentQuestion].question }</p>
                    <div className="awnser-container">
                    { game?.questions[curentQuestion].answers.map((ans, index) => (
                        <button key={index} onClick={() => setAns(ans.type)} className="question-awnser">{ ans.value }</button>
                    )) }
                    </div>
                    <div className="bubbles">
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                    </div>
                </div>}
            </div> : <div className="userInf">
                <div className="userPic">
                    <div className="current-userPic">
                        <img className="active-userPic" src={userPic} onClick={() => openPicWindow()} alt=""></img>
                        <i className="fa-solid fa-pen" onClick={() => openPicWindow()}></i>
                    </div>
                </div>
                <div className="inf-join">
                    <input type="text" placeholder="Benutzername eingeben" onChange={(e) => setUsername(e.target.value)}  value={username} /><br />
                    <button className="join" onClick={() => startQuiz()}>Quiz starten</button>
                    <div className="leave" onClick={() => navigate("/")}>Verlassen</div>
                </div>
                <div className="dropdown-userPic" style={picMenu}>
                    <div className="pictures-dropdown">
                        <i className="fa-regular fa-circle-xmark" onClick={() => setPicMenu({ display: "none" })}></i>
                        <img className="pic" src={userPic} alt=""></img>
                        <img className="pic" src={userPic} alt=""></img>
                        <img className="pic" src={userPic} alt=""></img>
                        <img className="pic" src={userPic} alt=""></img>
                        <img className="pic" src={userPic} alt=""></img>
                        <img className="pic" src={userPic} alt=""></img>
                        <img className="pic" src={userPic} alt=""></img>
                        <img className="pic" src={userPic} alt=""></img>
                        <img className="pic" src={userPic} alt=""></img>
                        <img className="pic" src={userPic} alt=""></img>
                        <img className="pic" src={userPic} alt=""></img>
                        {/* Bilder Links müssen noch geändert werden */}
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Game