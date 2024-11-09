import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

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
            Account Page <br></br>
            <button onClick={() => signOut(auth)}>Logout</button>
        </div>
     );
}

export default Account;