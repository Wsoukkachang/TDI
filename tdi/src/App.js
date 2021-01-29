import React, { Component } from "react";
import "./App.css";
import ButtonAppBar from "./Components/AppBar";
import SiteMap from "./Components/Map";
import Logo from "./Components/Logo";
import About from "./Components/About";
import Slide from "./Components/Carousel";
import Footer from "./Components/Footer";
import "./Components/Carousel.scss";

import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";

const slides = [
  {
    title: "Overview",
    subtitle: "Grand Prairie",
    description: "Adventure is never far away",
    image: "https://i.imgur.com/IPaDRCY.jpg",
  },
  {
    title: "Facility",
    subtitle: "Dallas",
    description: "Providing new perspectives",
    image: "https://i.imgur.com/4ewiC70.jpg",
  },
  {
    title: "Fields",
    subtitle: "Fort Worth",
    description: "A piece of heaven",
    image: "https://i.imgur.com/SobliYQ.jpg",
  },
];

const initialState = {
  slideIndex: 0,
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length,
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
    };
  }
};

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
  // This is only being set here because the demo is in an iframe.
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
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);
  let mapCenter = { lat: 32.738773, lng: -97.003098 };

  let mapZoom = 12;
  return (
    <div className="app">
      <ButtonAppBar />
      <Toolbar id="back-to-top-anchor" />

      <Logo />

      <About />

      <div className="slidesContainer">
        <div className="slides">
          <button onClick={() => dispatch({ type: "PREV" })}>‹</button>
          {[...slides, ...slides, ...slides].map((slide, i) => {
            let offset = slides.length + (state.slideIndex - i);
            return <Slide slide={slide} offset={offset} key={i} />;
          })}
          <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
        </div>
      </div>

      <header className="App-header"></header>
      <SiteMap center={mapCenter} zoom={mapZoom} />
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
