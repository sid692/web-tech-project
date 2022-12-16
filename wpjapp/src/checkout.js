import React from 'react';
import './App.css'
import axios from 'axios';

import im from './logo.png'
import bg from './sign_bg.jpeg'

import SearchBar from './search_bar';
import WhiteBox from './white_box';
import SignedNavBar from './signed_nav_bar';
import WebBox from './web_box';
import FeatureBlock from './features';
import TileChoiceBlock from './tile_choice';
import ProBlock from './pro_version';
import FootBar from './foot_bar';
import { BrowserRouter as Router, Routes, Route ,Link} from "react-router-dom";

class Checkout extends React.Component {
    state={
        orderlist:[],
        totalcost:0
    }
    onclick=()=>{
      axios.delete("http://localhost:8080/order/delete")
  }

    
    componentDidMount = () => {
        this.getUser();
      };
    
    getUser = () => {
        axios.get('http://localhost:8080/order')
          .then((response) => {
            const data = response.data;
            this.setState({ orderlist: data });
            console.log('Data has been received!!');
          })
          
      }

      displayorder = (orderlist) => {

        if (!orderlist.length) return null;

    
        var sum=0;
        for(var i=0;i<orderlist.length;i=i+1)
        {
            sum=sum+parseInt(orderlist[i].cost)
        }
        this.setState({
            totalcost:sum
        })

        return orderlist.map((order, index) => (
          
          <ul>
          <li key={index}>
            
            <p style={{fontSize:"20px", fontFamily:"Secular One", fontWeight:"bold"}}>{order.name}</p>
            <p style={{position:"relative", left:"275px", bottom:"50px", fontSize:"18px", fontFamily:"Secular One"}}>Rs. {order.cost}</p>
            
          </li>
          </ul>
        ));
      }

    render(){
    window.scrollTo(0, 0);
    document.body.style.overflowY = "hidden";
    document.body.style.overflowX = "hidden";
    return (
        <>
            <img src={bg} class="sign_in_bg" style={{ position: "absolute", height: "100%", width: "100%", top:"70px" }} />

            <SignedNavBar />

            <br />

            <h1 style={{color:"black", position:"relative", top:"60px", left:"70px", fontFamily:"Silkscreen", fontSize:"50px"}}>ORDER SUMMARY</h1>

            <div class="checkout_box">
            <h1 style={{fontSize:"35px", fontFamily:"Secular One", fontWeight:"bold", position:"relative", bottom:"27px"}}>Services requested by you:</h1>
            <h2 style={{position:"relative", left:"50px"}}>Skillset Of</h2>
            <h2 style={{position:"relative", left:"320px", bottom:"50px"}}>Cost</h2>

            {this.displayorder(this.state.orderlist)}
            <hr />
            <h1 style={{fontFamily:"Secular One"}}>Total cost: Rs. {this.state.totalcost}</h1><br/><br/>
            <Link to ="/signedin"><button class="buy_now" onClick={onclick}style={{position:"relative", bottom:"38px", left:"153px"}}>BUY NOW</button></Link>
            <br/>
            </div>
        </>
    );
}
}


export default Checkout;
