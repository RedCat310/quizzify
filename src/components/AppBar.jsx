import '../styles/AppBar.scss'
import '../styles/general.scss'
import logo from '../assets/no_back_logo.png'
import user from '../assets/user.svg'
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
                    <Link>Kontoeinstellungen</Link>
                    <button onClick={() => signOut(auth)}>Ausloggen</button>
                </div>
            </div>

        </div>
    </div> );
}

export default AppBar;