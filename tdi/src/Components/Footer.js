import React, { Component } from "react";
import "./Footer.css";
import EmailIcon from "@material-ui/icons/Email";

export default class Footer extends Component {
  render() {
    return (
      <div className="footerContainer">
        <i class="mdi mdi-chevron-double-up page-link" dest="home"></i>

        <div class="icon-wrap flex row">
          {/* <a href="https://www.linkedin.com/in/wsoukkachang/">
            <div class="flex icon" id="icon-2">
              <i class="mdi mdi-linkedin"></i>
            </div>
          </a>
          <a href="https://github.com/Wsoukkachang/">
            <div class="flex icon" id="icon-5">
              <i class="mdi mdi-github-circle"></i>
            </div>
          </a> */}

          <a href="mailto: saul@texasdroneimaging.net">
            <div class="flex icon" id="icon-3">
              <EmailIcon color="primary" />
            </div>
          </a>
          {/* <a href="https://www.instagram.com/orth0gonal/">
            <div class="flex icon" id="icon-4">
              <i class="mdi mdi-instagram"></i>
            </div>
          </a> */}
        </div>
        <div class="info-box">
          <div class="footnote">
            Texas Drone Imaging <span class="highlight">&copy; 2020</span>
          </div>
        </div>
      </div>
    );
  }
}
