import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

function Create() {
    const navigate = useNavigate()
    useEffect(() => {
        if(!auth?.currentUser){
            navigate('/account/login')
        }
    })
    return ( <div>
        Erstellen
    </div> );
}

export default Create;