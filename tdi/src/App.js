import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";

import ButtonAppBar from "./Components/AppBar";
import Logo from "./Components/Logo";
import About from "./Components/About";
import Carousel from "./Components/Carousel";
import SiteMap from "./Components/Map";
import Footer from "./Components/Footer";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

// scroll to top button
function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

function App(props) {
  let mapCenter = { lat: 32.738773, lng: -97.003098 };
  let mapZoom = 12;

  return (
    <div className="app">
      <ButtonAppBar />
      <Toolbar id="back-to-top-anchor" />
      <Logo />

      <About />
      {/* <Toolbar id="about-anchor" /> */}

      <Carousel />
      {/* <Toolbar id="gallery-anchor" /> */}

      <SiteMap center={mapCenter} zoom={mapZoom} />
      {/* <Toolbar id="map-anchor" /> */}

      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      <Footer />
    </div>
  );
}

export default App;
