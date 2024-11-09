import React from "react";
import '../styles/AppBar.scss'
import '../styles/general.scss'
import logo from '../assets/no_back_logo.png'
import user from '../assets/user.svg'

function AppBar() {
    return ( <div>
        <div className="appBar">
        <img className="logo" src={logo}></img>
            <div className="tags">
                <div className="tag-1 tag tag-active"><i class="fa-solid fa-house"></i></div>
                <div className="tag-2 tag "><i class="fa-solid fa-pen"></i></div>
                <div className="tag-3 tag"><i class="fa-solid fa-cloud-arrow-up"></i></div>
            </div>
            <img src={user} alt="" className="user"></img>
        </div>
    </div> );
}

export default AppBar;