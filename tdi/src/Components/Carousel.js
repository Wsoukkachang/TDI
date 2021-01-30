import React from "react";
import Slide from "./Slide";
import GP from "../Images/GP.PNG";
import Dallas from "../Images/Dallas.PNG";
import FW from "../Images/FW.PNG";
import "animate.css"; // you need to require the css for animation
import "./Carousel.scss";

const slides = [
  {
    title: "Overview",
    subtitle: "Grand Prairie",
    description: "Adventure is never far away",
    image: `${GP}`,
  },
  {
    title: "Facility",
    subtitle: "Dallas",
    description: "Providing new perspectives",
    image: `${Dallas}`,
  },
  {
    title: "Fields",
    subtitle: "Fort Worth",
    description: "A piece of heaven",
    image: `${FW}`,
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

function Carousel() {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return (
    <div className="slidesContainer">
      <div className="slides">
        <button
          className="animate__animated animate__bounceInLeft animate__delay-0.5s"
          onClick={() => dispatch({ type: "PREV" })}
        >
          ‹
        </button>
        {[...slides, ...slides, ...slides].map((slide, i) => {
          let offset = slides.length + (state.slideIndex - i);
          return <Slide slide={slide} offset={offset} key={i} />;
        })}
        <button
          className="animate__animated animate__bounceInRight animate__delay-0.5s"
          onClick={() => dispatch({ type: "NEXT" })}
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default Carousel;
