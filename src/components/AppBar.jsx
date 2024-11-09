import '../styles/AppBar.scss'
import '../styles/general.scss'
import logo from '../assets/no_back_logo.png'
import user from '../assets/user.svg'
import { Link } from "react-router-dom";

function AppBar(props) {
    return ( <div style={props.despawn ? { display: "none" } : {  }}>
        <div className="appBar">
        <img className="logo" src={logo} alt=""></img>
            <div className="tags">
                <Link to="/account" className={"tag-1 tag " + props.account}><i className="fa-solid fa-house"></i></Link>
                <Link to="/account/create" className={"tag-2 tag " + props.create}><i className="fa-solid fa-pen"></i></Link>
                <Link to="/account/host" className={"tag-3 tag " + props.host}><i className="fa-solid fa-cloud-arrow-up"></i></Link>
            </div>
            <img src={user} alt="" className="user"></img>
        </div>
    </div> );
}

export default AppBar;