import { useState } from 'react';
import { auth, google } from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../styles/login.scss'
import '../styles/general.scss'
import logo from '../assets/no_back_logo.png'
// import '../components/login.js'


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
    return ( 
    <div> 

            <img src={logo} alt="" className="logo"></img>

        <div className='field'>     
            <div className='login'>
                <div className='login-content' id='login-content'>
                <button onClick={() => signInWithGoogle()}><i className="fa-brands fa-google"></i> Mit Google anmelden</button>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='E-Mail' />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Passwort'/>
                    <button>Anmelden</button><br />
                    <button id='switchToRegister'>Registrieren</button>
                </div>
            </div>
            <div className='register'>
                <div className='register-content'>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name'/>
                    <input type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} placeholder='E-Mail' />
                    <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder='Passwort'/>
                    <input type="password" value={newPasswordRetype} onChange={(e) => setNewPasswordRetype(e.target.value)} placeholder='Passwort wiederholen'/>
                    <button onClick={() => register()}>Registrieren</button><br />
                    <button onClick={() => signInWithGoogle()}><i className="fa-brands fa-google"></i> Mit Google anmelden</button>
                </div>
            </div>
        </div> 

        {/* <Link className='zurueck' to='/startPage'>Zurück</Link> */}
    </div> 
    );
}

export default Login;