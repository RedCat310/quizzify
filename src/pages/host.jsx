import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import '../styles/host.scss'

function Host() {
    const navigate = useNavigate()
    const [otherHosting, setotherHosting] = useState({
        all: {display: "none"}
    })
    // useEffect(() => {
    //     if(!auth?.currentUser){
    //         navigate('/account/login')
    //     }
    // })

    return ( <div>

        <div className="pop-up-host">
            <div className="menu-pop-up">
                <div className="menu-btn active">Mit ID</div>
                <div className="menu-btn">Mit anderer Variante</div>
                <i class="fa-solid fa-right-from-bracket"></i>
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

        {/* ist im style display none */}
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