import React, { Component } from "react";
import Typist from "react-typist";
import { Divider, Typography } from "@material-ui/core";
import "./About.scss";

export default class About extends Component {
  render() {
    return (
      <div className="aboutContainer">
        <h1 className="aboutDiv">About Us</h1>
        <Divider variant="fullWidth" />
        <Typist>
          <span className="my-custom-class">
            SOLUTIONS WITH NEW PERSPECTIVES. OUR COMPANY IS CONSTANTLY EVOLVING
            AND GROWING.
            <br />
            WE PROVIDE A WIDE RANGE OF AERIAL SERVICES.
            <br />
            OUR MISSION IS TO PROVIDE THE BEST SOLUTION THAT HELPS EVERYONE.
            <br />
            IF YOU WOULD LIKE TO CONTACT US,
            <br />
            PLEASE CLICK ON THE BUTTON ABOVE, OR BELOW.
          </span>
        </Typist>
      </div>
    );
  }
}
