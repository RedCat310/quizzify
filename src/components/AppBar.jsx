import '../styles/AppBar.scss'
import '../styles/general.scss'
import logo from '../assets/no_back_logo.png'
import user from '../assets/user.svg'
import user2 from '../assets/user_2.svg'
import { Link } from "react-router-dom";
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase'

function AppBar(props) {
    return ( <div style={props.despawn ? { display: "none" } : {  }}>
        <div className="appBar">
        <Link to="/"><img className="logo" src={logo} alt=""></img></Link>
            <div className="tags">
                <Link to="/account" className={"tag-1 tag " + props.account}><i className="fa-solid fa-house"></i></Link>
                <Link to="/account/create" className={"tag-2 tag " + props.create}><i className="fa-solid fa-pen"></i></Link>
                <Link to="/account/host" className={"tag-3 tag " + props.host}><i className="fa-solid fa-cloud-arrow-up"></i></Link>
            </div>
            <div className="dropdown">
                <img src={user} alt="" className="user"></img>
                <div className="dropdown-content">
                <img src={user2} alt="" className="user-dropdown"></img>
                    <div className='initials-dropdown'>
                        <div className='user-name'><em>Benutzername</em></div>
                        <div className='user-email'><em>Benutzer Email</em></div>
                    </div>
                    <Link className='settings-dropdown'>Konto-Einstellungen</Link>
                    <button onClick={() => signOut(auth)} className='signOut-dropdown'>Ausloggen</button>
                    <div className='impressum-dropdown'>
                        <div className='data-dropdown'>Datenschutzerklärung</div>
                        <div className='usage-dropdown'>Nutzungsbedingungen</div>
                    </div>
                </div>
            </div>

        </div>
    </div> );
}

export default AppBar;