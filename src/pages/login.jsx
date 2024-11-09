import { useState } from 'react';
import { auth, google } from '../config/firebase';
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup, signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.scss'
import '../styles/general.scss'
import logo from '../assets/no_back_logo.png'
import { style } from 'framer-motion/client';
import { Transition } from 'react-transition-group';
// import '../components/login.js'


function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [newPasswordRetype, setNewPasswordRetype] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [name, setName] = useState("")
    const [alert, setAlert] = useState({
        style: { display: 'none' },
        message: "",
        warning: { display: 'none' },
        info: { display: 'none' },
        loading: { display: 'none' },
    })
    const [registerStyle, setRegisterStyle] = useState({
        content: {display: "none"}
    })
    const [loginStyle, setloginStyle] = useState({})


    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, google)
            navigate('/account')
        } catch (error) {
            console.log(error.code)
        }
    }
    const makeAlert = async (error, loading, message, duration) => {
        if(error === "none"){
            setAlert({
                style: { display: 'none' },
                message: "",
                warning: { display: 'none' },
                info: { display: 'none' },
                loading: { display: 'none' },
            })
        }
        setAlert({
            style: { },
            message: message,
            warning: error ? {  } : { display: 'none' },
            info: error ? { display: 'none' } : {  },
            loading: loading ? {  } : { display: 'none' },
        })
        if(duration !== "all"){
            await delay(duration * 1000)
            setAlert({
                style: { display: 'none' },
                message: "",
                warning: { display: 'none' },
                info: { display: 'none' },
                loading: { display: 'none' },
            })
        }
    }
    const delay = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));
    const register = async () => {
        if(newEmail !== "" && newPassword !== "" && newPasswordRetype !== "" && name !== ""){
            if(newPassword === newPasswordRetype){
                makeAlert(false, true, "Konto erstellen", "all")
                try {
                    let data = await createUserWithEmailAndPassword(auth, newEmail, newPassword)
                    // sendEmailVerification(data.user)
                    // signOut(auth)
                } catch (error) {
                    alert(error.code)
                }
                makeAlert(true, false, "Es wurde eine E-Mail an ihre Adresse versendet um zu verifizieren, dass sie es wirklich sind.")
            }else{
                makeAlert(true, false, "Passwörter stimmen nicht überein", 2)
            }
        }else{
            makeAlert(true, false, "Bitte alle Felder ausfüllen!", 2);
        }
    }
    const changeWindow = () =>{
        setRegisterStyle({
            all: { width: "500px", transition: "500ms ease-in" },
        })
        setloginStyle({
          all: {width: "200px", transition: "500ms ease-in" },
          content: {display: "none"}
        })
    }

    const changeWindow2 = () =>{
        setRegisterStyle({ 
          all: { width: "200px", transition: "500ms ease-in" },
          content: {display: "none"}
        })
        setloginStyle({
           all: { width: "500px", transition: "500ms ease-in" }
        })
    }
    return ( 
    <div> 
        <div className='alert' style={alert.style}>
          <div className='search'>
            <div className='search-text' style={alert.info}>{ alert.message }</div> {/* Wenn gesucht */}
            <div className='error-search'style={alert.warning}>{ alert.message }</div> {/* Wenn nix gefunden */}
            <div className="loader" style={alert.loading}></div> {/* Wenn gesucht */}
          </div>
      </div>
            <img src={logo} alt="" className="logo"></img>

        <div className='field'>     
            <div className='login' style={loginStyle.all}>
                <div className='login-content' style={loginStyle.content}>
                <button onClick={() => signInWithGoogle()}><i className="fa-brands fa-google"></i> Mit Google anmelden</button>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='E-Mail' />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Passwort'/>
                    <button>Anmelden</button><br />
                    <button onClick={()=> changeWindow()} style={registerStyle.change}>Registrieren</button>
                </div>
            </div>
            <div className='register' style={registerStyle.all}>
                <div className='register-content' style={registerStyle.content}>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name'/>
                    <input type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} placeholder='E-Mail' />
                    <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder='Passwort'/>
                    <input type="password" value={newPasswordRetype} onChange={(e) => setNewPasswordRetype(e.target.value)} placeholder='Passwort wiederholen'/>
                    <button onClick={() => register()}>Registrieren</button><br />
                    <button onClick={() => signInWithGoogle()}><i className="fa-brands fa-google"></i> Mit Google anmelden</button>
                    <button onClick={changeWindow2} style={registerStyle.change2}>Einloggen</button>
                </div>
            </div>
            <Link to="../../" className='zurueck'>Zurück</Link>
        </div> 
    </div>
    );
}

export default Login;