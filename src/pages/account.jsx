import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import '../styles/account.scss'

function Account() {
    const navigate = useNavigate()
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(!user){
                navigate('/account/login')
            }
        })
    })
    return ( 
        <div>
            {/* <button onClick={() => signOut(auth)}>Logout</button> */}
            <div className="menu-bar">
                {/* <div className="neues-quiz">Erstellen</div> */}
                {/* <div className="numberOfQuiz">2 von 2 angezeigt</div> */}
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

                <div className="add-projekt"><i class="fa-solid fa-plus"></i></div>
            </div>
        </div>
     );
}

export default Account;