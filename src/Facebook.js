import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from 'react-google-login';
export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    phone: "",
    picture: ""
  };

  responseFacebook = response => {
    console.log(response);

    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      phone: response.phone,
      picture: response.picture.data.url
    });
  };

  componentClicked = () => console.log("clicked");

  render() {
    const responseGoogle = (response) => {
        console.log(response);
      }
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "#f4f4f4",
            padding: "20px"
          }}
        >
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
          
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="2082657918699088"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }

    return <div  style={{
        width: "400px",
        margin: "auto",
        background: "#f4f4f4",
        padding: "0px"
      }}>{fbContent}
      <br />
      <br />
      <GoogleLogin
        clientId="935146731529-qrmqsth87n9qrr3rhj9upsq5h9prcc7m.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      /></div>;
  }
}