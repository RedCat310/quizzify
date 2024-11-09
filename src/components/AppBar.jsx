import React, { useEffect } from "react";
import '../styles/AppBar.scss'
import '../styles/general.scss'
import logo from '../assets/no_back_logo.png'
import user from '../assets/user.svg'
import { Link } from "react-router-dom";

function AppBar(props) {
    useEffect(() => {
        console.log("tag-1 tag " + props.account)
    })
    return ( <div>
        <div className="appBar">
        <img className="logo" src={logo} alt=""></img>
            <div className="tags">
                <Link to="/account" className={"tag-1 tag " + props.account}><i class="fa-solid fa-house"></i></Link>
                <Link to="/account/create" className={"tag-2 tag " + props.create}><i class="fa-solid fa-pen"></i></Link>
                <Link to="/account/host" className={"tag-3 tag " + props.host}><i class="fa-solid fa-cloud-arrow-up"></i></Link>
            </div>
            <img src={user} alt="" className="user"></img>
        </div>
    </div> );
}

export default AppBar;