import logo from './nav_logo.png'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from 'react';
import axios from 'axios';

class SignedNavBar extends React.Component{ 
    onclick=()=>{
        axios.delete("http://localhost:8080/order/delete")
    }

    render() {
        return(
    <div class="nav_box">
        <div class = "topnav">
        <Link to="/signedin"><img src={logo} onClick={this.onclick} height='60px' style={{position:"fixed", left:"50px", top:"5px" }} /> </Link>
        <Link to="/" onClick={this.onclick} style={{position:"fixed", right:"60px", top:"-27px",}}><p>Sign Out</p></Link>
        <img src="https://e7.pngegg.com/pngimages/782/114/png-clipart-profile-icon-circled-user-icon-icons-logos-emojis-users-thumbnail.png" alt="Logo" height='40px' style={{position:"fixed", right:"180px", top:"15px" }} />
        <Link to="/checkout"><img src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" alt="Logo" height='40px' style={{position:"fixed", right:"250px", top:"15px" }} /> </Link>
        </div>
    </div>
)
    }
}

export default SignedNavBar;