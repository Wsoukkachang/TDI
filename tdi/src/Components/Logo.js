import React, { Component } from "react";
import Oval from "../Images/TDI_Oval_Logo.PNG";
import "./Logo.css";

export default class Logo extends Component {
  render() {
    return (
      <div className="logoContainer">
        <img className="logoImg" alt="logoImg" src={Oval}></img>
      </div>
    );
  }
}
