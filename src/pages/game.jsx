import { useNavigate, useParams } from "react-router-dom"
import '../styles/game.scss'
import userPic from '../assets/user_picture.png'
import '../styles/general.scss'
import { useEffect, useState } from "react"
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore"
import { db } from "../config/firebase"
import { CountdownCircleTimer } from "react-countdown-circle-timer"

function Game(){
    const params = useParams()
    const navigate = useNavigate()
    const [picMenu, setPicMenu] = useState({display: 'none'})
    const [username, setUsername] = useState("")
    const [page, setPage] = useState(false)
    const openPicWindow = () => {
        setPicMenu({display: "block"})
    }
    const [currentQ, setCurrentQ] = useState(null);
    const [gameData, setGameData] = useState(null);
    const [userID, setUserID] = useState(null);
    const [answered, setAnswered] = useState(false);
    const [timer, setTimer] = useState({
        running: false,
        duration: 0,

    });

    useEffect(() => {
        async function getData() {
            let data = await getDoc(doc(db, params.id, "data"))
            setGameData(data.data())
        }
        getData()
    })
    const delay = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));
    const startQuiz = async  () => {
        if(username !== ""){
            setPage(true)
            let uid = crypto.randomUUID()
            setUserID(uid)
            setDoc(doc(db, params.id, uid), {
                name: username,
                doneQ: 0,
            })
            // setDoc(doc(db, params.id, userID), {
            //     name: username,
            //     doneQ: 0
            // })
            setCurrentQ([gameData.questions[0], 0])
            setTimer({
                running: true,
                duration: gameData.questions[0].time,
            })
        }
    }
    const submitAnswer = async (ans) => {
        let s = await getDoc(doc(db, params.id, userID))
        let data = s.data()
        if(data?.doneQ === 0){
            updateDoc(doc(db, params.id, userID), {
                doneQ: 1,
                answers: [ans],
            })
        }else{
            data.answers[currentQ[1]] = ans
            data.doneQ++
            console.log(data)
            setDoc(doc(db, params.id, userID), data)
        }
            setTimer({
                running: false,
                duration: gameData.questions[currentQ[1]++].time,
            })
            setTimer({
                running: true,
                duration: gameData.questions[currentQ[1]++].time,
            })
            setCurrentQ([gameData.questions[currentQ[1]++], currentQ[1]++])
    }
    const renderTime = ({ remainingTime }) => {
        if (remainingTime === 0) {
            
            return <div className="timer">Done</div>;
          }
        
          return (
            <div className="timer">
              <div className="text">Remaining</div>
              <div className="value">{remainingTime}</div>
              <div className="text">seconds</div>
            </div>
          );
    }
    return(
        <div>
            {page ? <div>
                <CountdownCircleTimer
                    isPlaying={timer.running}
                    duration={timer.duration}
                    colors={["#004777"]}
                    colorsTime={[100]}
                    onComplete={() => ({ shouldRepeat: false, delay: 1 })}
                >
                {renderTime}
                </CountdownCircleTimer>
                <h1>{ currentQ[0]?.question }</h1>
                { currentQ[0]?.answers?.map((ans, index) => (
                    <button key={index} onClick={() => submitAnswer(ans.type)}>{ ans.value }</button>
                )) }
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