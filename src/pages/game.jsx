import { useNavigate, useParams } from "react-router-dom"
import '../styles/game.scss'
import userPic from '../assets/user_picture.png'
import '../styles/general.scss'
import { useEffect, useRef, useState } from "react"
import { collection, doc, getDoc, onSnapshot, setDoc, updateDoc } from "firebase/firestore"
import { db } from "../config/firebase"

function Game(){
    const params = useParams()
    const navigate = useNavigate()
    const [picMenu, setPicMenu] = useState({display: 'none'})
    const [username, setUsername] = useState("")
    const [page, setPage] = useState(false)
    const [curentQuestion, setCurentQuestion] = useState(null);
    const [userID, setUserID] = useState(null);
    const [done, setDone] = useState(false);
    const [timer, setTimer] = useState({
        date: 0
    });
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
        if(username !== "" && game.status === "quiz"){
            setPage(true)
            setCurentQuestion(0)
            let id = crypto.randomUUID()
            setUserID(id)
            setDoc(doc(db, params.id, id), {
                name: username,
                doneQ: 0
            })
            setTimer({
                
                time: game.questions[0].time
            })
        }else alert("Du hast keinen Benutzername eingegeben oder das quiz ist schon vorbei.")
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
        if(game.questions[curentQuestion + 1]){
            setTimer({
                time: game.questions[curentQuestion + 1].time
            })
            setCurentQuestion(curentQuestion + 1) 
        }
        else setDone(true)
    }
    const renderAnswer = () => {
        if(game.status === "done"){
            let data = game.questions
            let correct = 0
            for (let i = 0; i < data.length; i++) {
                data[i].ans = player.answers[i]
                if(player.answers[i] === true){
                    correct++
                } 
            }
            return ( <div>
                <h1>Auswertung</h1>
                <h3>Du solltest dein Platzireung bei deinem/r Moderator:in finden</h3>
                <h2>{ correct }/{ data.length } Punkte</h2>                    
                { data.map((ques) => (
                    <div key={ques.question}>
                        <h3>Frage: { ques.question }</h3>
                        <h4>Du hast { ques.ans ? "richtig" : "falsch" } geantwortet</h4>
                        { ques.answers.map((ans, index) => (
                            <p key={ans.value} style={ ans.type ? { color: 'green' } : { color: 'red' } }> { ans.value }</p>
                        )) }
                    </div>
                )) }
            </div> )
        }else return (<div className="finish-quiz">
            <div className="text-finish"> Quiz abgeschlossen! Warte auf dein Ergebnis...</div>
            <div className="loader"></div>
        </div>)
    } 
    return(
        <div>
            {page ? <div>
                { done ? renderAnswer() : <div>
                    <p className="question">{ game?.questions[curentQuestion].question }</p>
                    <div className="awnser-container-parent">
                        <div className="awnser-container">
                        { game?.questions[curentQuestion].answers.map((ans, index) => (
                            <button key={index} onClick={() => setAns(ans.type)} className="question-awnser">{ ans.value }</button>
                        )) }
                        </div>
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