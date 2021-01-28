import React, { Component } from "react";
import "./App.css";
import ButtonAppBar from "./Components/AppBar";
import SiteMap from "./Components/Map";
import Logo from "./Components/Logo";
import About from "./Components/About";
import Slide from "./Components/Carousel";
import Footer from "./Components/Footer";
import "./Components/Carousel.scss";

const slides = [
  {
    title: "Overview",
    subtitle: "Grand Prairie",
    description: "Adventure is never far away",
    image: "https://i.imgur.com/aKanXEU.jpg",
  },
  {
    title: "Facility",
    subtitle: "Dallas",
    description: "Providing new perspectives",
    image: "https://i.imgur.com/QiN7oM0.jpg",
  },
  {
    title: "Fields",
    subtitle: "Fort Worth",
    description: "A piece of heaven",
    image: "https://i.imgur.com/WXqKyPf.jpg",
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

function App() {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);
  let mapCenter = { lat: 32.738773, lng: -97.003098 };

  let mapZoom = 12;
  return (
    <div className="app">
      <ButtonAppBar />

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

      <SiteMap center={mapCenter} zoom={mapZoom} />
      <header className="App-header"></header>
      <Footer />
    </div>
  );
}

export default App;
