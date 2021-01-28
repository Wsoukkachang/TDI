import React, { Component } from "react";
import { CardMedia } from "@material-ui/core";
import "./Logo.css";

export default class Logo extends Component {
  render() {
    return (
      <div className="logoContainer">
        <img className="logoImg" src="https://i.imgur.com/7GnR40o.png"></img>
      </div>
    );
  }
}
