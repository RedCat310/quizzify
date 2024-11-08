import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Account() {
    const navigate = useNavigate()
    useEffect(() => {
        if(!false){
            navigate('/account/login')
        }
    })
    return ( 
        <div>
            Account Page
        </div>
     );
}

export default Account;