import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import '../styles/account.scss'

function Account() {
    const navigate = useNavigate()
    const [NewQuizPopUp, setNewQuizPopUp] = useState({
        all: {display: "none"}
    })
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(!user){
                navigate('/account/login')
            }
        })
    })
    const toggleWindowNewQuiz = () => {
        setNewQuizPopUp({
            all: {display: "block"}
        })
    }
    const closeWindowNewQuiz = () => {
        setNewQuizPopUp({
            all: {display: "none"}
        })
    }
    return ( 
        <div>
            {/* <button onClick={() => signOut(auth)}>Logout</button> */}
            <div className="menu-bar">
                {/* <div className="neues-quiz">Erstellen</div> */}
                {/* <div className="numberOfQuiz">2 von 2 angezeigt</div> */}
            </div>

            <div className="create-new-quiz-popup" style={NewQuizPopUp.all}>
                <div className="quiz-mode">
                    <i class="fa-solid fa-right-from-bracket" onClick={() => closeWindowNewQuiz()}></i>
                    <div className="quiz-mode-btn active">Normal</div>
                    <div className="quiz-mode-btn">Kommt noch!</div>
                </div>
                <div className="content-create-new-quiz">
                    <input placeholder="Name des Quiz" autoComplete="off" type="text" className="enter-quiz-name" maxLength={30}></input>
                    <div className="info-length">Max. 30 Ziffern</div>
                    <div className="create-quiz-btn">Erstellen</div>
                </div>
            </div>

            {/* ist im style display none */}
            <div className="alert-create-quiz" >
                <div className="loader"></div>
                <div className="alert-text-create-quiz">Quiz wird erstellt...</div>
            </div>

            <div className="projekt-view">
                <div className="projekt">
                    <i class="fa-solid fa-trash"></i>
                    <div className="circles">
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                    <div className="projekt-name-1">
                        <div className="projekt-name">Test 1</div>
                    </div>
                    <div className="create-date">15.11.2024</div>
                </div>



                <div className="projekt">
                    <i class="fa-solid fa-trash"></i>
                    <div className="circles">
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                    <div className="projekt-name-1">
                        <div className="projekt-name">Test 2</div>
                    </div>
                    <div className="create-date">15.11.2024</div>
                </div>

                <div className="add-projekt" onClick={() => toggleWindowNewQuiz()}><i class="fa-solid fa-plus"></i></div>
            </div>
        </div>
     );
}

export default Account;