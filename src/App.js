import React, { Component } from 'react';
import './App.css';

import FacebookLogin from 'react-facebook-login';

import GoogleLogin from 'react-google-login';

class App extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  };
  responseFacebook = (response) => {
    console.log(response);
    this.setState(
      {
        isLoggedIn:true,
        userID:response.userID,
        name:response.name,
        email:response.email,
        picture:response.picture.data.url
      }
    )
  }
componentClicked=()=>console.log('clicked');
  render() {
let fbContent;
if(this.state.isLoggedIn){
fbContent=(
  <div>
    <img src={this.state.picture} alt={this.state.name}/>
  </div>
)
}
else{
fbContent=(
  <FacebookLogin
  appId="2082657918699088" //APP ID NOT CREATED YET
  autoLoad={true}
  fields="name,email,picture"
  onClick={this.componentClicked}
  callback={this.responseFacebook}
/>
);
}
    

    const responseGoogle = (response) => {
      console.log(response);
    }

    return (
      <div className="App">
        <h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>

      {/* <FacebookLogin
        appId="2082657918699088" //APP ID NOT CREATED YET
        fields="name,email,picture"
        callback={responseFacebook}
      /> */}
      {fbContent}
      <br />
      <br />


      <GoogleLogin
        clientId="935146731529-qrmqsth87n9qrr3rhj9upsq5h9prcc7m.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />

      </div>
    );
  }
}

export default App;