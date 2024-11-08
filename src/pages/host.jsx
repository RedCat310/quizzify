import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Host() {
    const navigate = useNavigate()
    useEffect(() => {
        if(!false){
            navigate('/account/login')
        }
    })
    return ( <div>
        Host
    </div> );
}

export default Host;