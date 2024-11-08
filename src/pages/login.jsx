import { useState } from 'react';
import { auth, google } from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [newPasswordRetype, setNewPasswordRetype] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [name, setName] = useState("")
    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, google)
            navigate(-1)
        } catch (error) {
            console.log(error.code)
        }
    }
    const register = async () => {
    }
    return ( <div>      
        <div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='E-Mail' />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Passwort'/>
            <button>Anmelden</button><br />
            <button onClick={() => signInWithGoogle()}><i className="fa-brands fa-google"></i> Mit Google anmelden</button>
        </div>
        <div>
            <input type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} placeholder='E-Mail' />
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name'/>
            <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder='Passwort'/>
            <input type="password" value={newPasswordRetype} onChange={(e) => setNewPasswordRetype(e.target.value)} placeholder='Passwort wiederholen'/>
            <button onClick={() => register()}>Registrieren</button><br />
            <button onClick={() => signInWithGoogle()}><i className="fa-brands fa-google"></i> Mit Google anmelden</button>
        </div>
    </div> );
}

export default Login;