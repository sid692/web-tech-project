import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Rating } from 'react-simple-star-rating'
import React from 'react';
import axios from 'axios'
class SignedVidBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            added: false
        }
    }
    onclick1 = ()=>{
        this.setState({added:false})
    }
    
    onclick2 = (event)=>{

        event.preventDefault();

    const payload = {
      name: this.props.name,
      cost:this.props.cost
    };



    axios({
      url: 'http://localhost:8080/order/save',
      method: 'POST',
      data: payload
    })
      .then(() => {
        console.log('Order has been sent to the server');
        
        
      })
      .catch(() => {
        console.log('Internal server error');
      });;
        this.setState({added:true})

    }

    render() {
        if (this.state.added) {
            return <div class="vid_box">
                <img class="aud_img" src={this.props.image} />
                <p class='vid_details'>&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style={{ position: "relative", bottom: "22px", right: "18px", fontSize: "22px" }}>{this.props.name}</b> <br /><br />
                    <div style={{ position: "relative", bottom: "30px", fontSize: "18px" }}>{this.props.desc}</div><br /><br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </p>
                <img src="https://static.vecteezy.com/system/resources/previews/007/033/146/original/profile-icon-login-head-icon-vector.jpg" style={{ height: "20px", width: "20px", position: "absolute", bottom: "232px", right: "348px", textAlign: "left" }} />

                <hr style={{ position: "relative", bottom: "110px", width: "345px" }} />
                <button style={{ position: "relative", bottom: "115px", left: "131px", backgroundColor: "white", border: "0px", fontFamily: "Secular One", fontSize: "20px" }}>Rs. {this.props.cost}</button>
                <button class="buy_now" onClick={this.onclick1}>🛒 ADDED TO CART</button>

                <div style={{ position: "relative", bottom: "145px", right: "120px" }}>
                    <Rating initialValue={this.props.rate} size="20" allowFraction="true" />
                </div>
            </div>
        }
        return <div class="vid_box">
            <img class="aud_img" src={this.props.image} />
            <p class='vid_details'>&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style={{ position: "relative", bottom: "22px", right: "18px", fontSize: "22px" }}>{this.props.name}</b> <br /><br />
                <div style={{ position: "relative", bottom: "30px", fontSize: "18px" }}>{this.props.desc}</div><br /><br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <img src="https://static.vecteezy.com/system/resources/previews/007/033/146/original/profile-icon-login-head-icon-vector.jpg" style={{ height: "20px", width: "20px", position: "absolute", bottom: "232px", right: "348px", textAlign: "left" }} />

            <hr style={{ position: "relative", bottom: "110px", width: "345px" }} />
            <button style={{ position: "relative", bottom: "115px", left: "131px", backgroundColor: "white", border: "0px", fontFamily: "Secular One", fontSize: "20px" }}>Rs. {this.props.cost}</button>
            <button class="buy_now" onClick={this.onclick2}>🛒 ADD TO CART</button>

            <div style={{ position: "relative", bottom: "145px", right: "120px" }}>
                <Rating initialValue={this.props.rate} size="20" allowFraction="true" />
            </div>
        </div>

    }
}

export default SignedVidBox;