import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

function Host() {
    const navigate = useNavigate()
    useEffect(() => {
        if(!auth?.currentUser){
            navigate('/account/login')
        }
    })
    return ( <div>
        Host
    </div> );
}

export default Host;