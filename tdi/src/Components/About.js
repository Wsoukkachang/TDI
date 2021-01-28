import React, { Component } from "react";
import "./About.css";
import { Divider, Typography } from "@material-ui/core";
export default class About extends Component {
  render() {
    return (
      <div className="aboutContainer">
        <h1>About Us</h1>
        <Divider variant="fullWidth" />
        <Typography>
          SOLUTIONS WITH NEW PERSPECTIVES. OUR COMPANY IS CONSTANTLY EVOLVING
          AND GROWING. WE PROVIDE WIDE RANGE OF SERVICES. OUR MISSION IS TO
          PROVIDE THE BEST SOLUTION THAT HELPS EVERYONE. IF YOU WANT TO CONTACT
          US, PLEASE CLICK ON THE BUTTON ABOVE OR BELOW.
        </Typography>
      </div>
    );
  }
}
