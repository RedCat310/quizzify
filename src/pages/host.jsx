import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import '../styles/host.scss'

function Host() {
    const navigate = useNavigate()
    const [PopUpStyle, setPopUpStyle] = useState({
        all: {display: "none"}
    })
    const [otherHosting, setotherHosting] = useState({
        all: {display: "none"}
    })
    // useEffect(() => {
    //     if(!auth?.currentUser){
    //         navigate('/account/login')
    //     }
    // })

    const showPopUp = () => {
        setPopUpStyle({
            all: {display: "block"}
        })
    }
    const closePopUp = () => {
        setPopUpStyle({
            all: {display: "none"}
        })
    }
    return ( <div>
        <div className="header">Hoste dein Quiz</div>
        <div className="btn-host" onClick={() => showPopUp()}>Hosten</div>

        <div className="pop-up-host" style={PopUpStyle.all}>
            <div className="menu-pop-up">
                <div className="menu-btn active">Mit ID</div>
                <div className="menu-btn">Mit anderer Variante</div>
                <i class="fa-solid fa-right-from-bracket" onClick={() => closePopUp()}></i>
            </div>
            <div className="id-hosting">
                <div className="id-hosting-content">
                    <div className="text-1">Wähle das Quiz, dass gehostet werden soll.</div>
                    <select className="select-quiz">
                        <option>Test 1</option>
                        <option>Test 2</option>
                    </select>
                    <div className="bestätigen-host">Los Gehts!</div>
                </div>
            </div>
            <div className="other-hosting" style={otherHosting.all}>
                Ups! Da ist etwas schiefgelaufen!
            </div>
        </div>

        <div className="alert">
            <div className="loader"></div>
            <div className="search-text-host">ID wird erstellt...</div>
            <div className="generated-id">
                Deine ID: <br></br><br></br> 128473985
            </div>
        </div>
    </div> );
}

export default Host;