import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
    const navigate = useNavigate()
    useEffect(() => {
        if(!false){
            navigate('/account/login')
        }
    })
    return ( <div>
        Erstellen
    </div> );
}

export default Create;