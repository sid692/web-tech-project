import React from 'react';
import './App.css';
import axios from 'axios';

import im from './logo.png'
import bg from './sign_bg.jpeg'

import SearchBar from './search_bar';
import WhiteBox from './white_box';
import NavBar from './nav_bar';
import WebBox from './web_box';
import FeatureBlock from './features';
import TileChoiceBlock from './tile_choice';
import ProBlock from './pro_version';
import FootBar from './foot_bar';

class SignUp extends React.Component {

  state = {
    firstname: '',
    lastname: '',
    username: '',
    age: '',
    email: '',
    password: '',
    list: []
  };
  componentDidMount = () => {
    this.getUser();
  };


  getUser = () => {
    axios.get('http://localhost:8080/user')
      .then((response) => {
        const data = response.data;
        this.setState({ list: data });
        console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  };


  submit = (event) => {
    event.preventDefault();

    const payload = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      username: this.state.username,
      age:this.state.age ,
      email: this.state.email,
     password: this.state.password,
    };



    axios({
      url: 'http://localhost:8080/user/save',
      method: 'POST',
      data: payload
    })
      .then(() => {
        console.log('Data has been sent to the server');
        this.resetUserInputs();
        this.getUser();
       window.location.href = "/signin"
      })
      .catch(() => {
        console.log('Internal server error');
      });;
  };

  resetUserInputs = () => {
    this.setState({
      firstname: '',
      lastname: '',
      username: '',
      age:'' ,
      email: '',
     password: '',
    });
  };
  render() {
    window.scrollTo(0, 0);
    document.body.style.overflowY = "hidden";
    document.body.style.overflowX = "hidden";
    return (
      <>

        <img src={bg} class="sign_up_bg" style={{ position: "absolute", top: "70px", height: "100%", width: "100%" }} />

        <NavBar />
        <br />

        {/* <img src={im} alt="Logo" height='350px' style={{ position: "relative", top: "120px", left: "200px" }} /> */}
        <p>
          <span className="search_text" style={{ position: "relative", top: "70px", left: "70px", fontFamily: "Silkscreen", color: "darkblue" }}>Sign Up</span>
        </p>

        <p class="signIn">Sign In</p>

        <div class="sign_up_box">
          <form onSubmit={this.submit}>
            <label for="firstname" style={{ fontFamily: "Silkscreen", fontSize: "25px", fontWeight: "bold" }}>First Name</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" id="firstname" name="firstname" value={this.state.firstname} style={{ fontSize: "15px", padding: "2%", border: "2px solid black", borderRadius: "5px", width: "250px", height: "15px" }} onChange={this.handleChange} /><br /><br />

            <label for="lastname" style={{ fontFamily: "Silkscreen", fontSize: "25px", fontWeight: "bold" }}>Last Name</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" id="lastname" name="lastname" value={this.state.lastname} style={{ fontSize: "15px", padding: "2%", border: "2px solid black", borderRadius: "5px", width: "250px", height: "15px" }} onChange={this.handleChange} /><br /><br />

            <label for="username" style={{ fontFamily: "Silkscreen", fontSize: "25px", fontWeight: "bold" }}>Username</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" id="username" name="username" value={this.state.username} style={{ fontSize: "15px", padding: "2%", border: "2px solid black", borderRadius: "5px", width: "250px", height: "15px" }} onChange={this.handleChange} /><br /><br />

            <label for="age" style={{ fontFamily: "Silkscreen", fontSize: "25px", fontWeight: "bold" }}>Age</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="number" id="age" name="age" value={this.state.age} style={{ fontSize: "15px", padding: "2%", border: "2px solid black", borderRadius: "5px", width: "250px", height: "15px" }} onChange={this.handleChange} /><br /><br />

            <label for="email" style={{ fontFamily: "Silkscreen", fontSize: "25px", fontWeight: "bold" }}>Email</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="email" id="email" name="email" value={this.state.email} style={{ fontSize: "15px", padding: "2%", border: "2px solid black", borderRadius: "5px", width: "250px", height: "15px" }} onChange={this.handleChange} /><br /><br />


            <label for="password" style={{ fontFamily: "Silkscreen", fontSize: "25px", fontWeight: "bold" }}>Password</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="password" id="password" name="password" value={this.state.password} style={{ fontSize: "15px", padding: "2%", border: "2px solid black", borderRadius: "5px", width: "250px", height: "15px" }} onChange={this.handleChange} /><br /><br />

            <button type="submit" id="search_button" style={{ top: "6px", left: "170px", fontSize: "16px", height: "60px", width: "110px", padding: "10px", fontFamily: "Silkscreen", fontWeight: "bold" }}>Register</button>

          </form>
        </div>
      </>
    );
  }
}

export default SignUp;

