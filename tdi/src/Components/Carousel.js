import React from "react";
import Slide from "./Slide";
import "./Carousel.scss";
import GP from "../Images/GP.PNG";
import Dallas from "../Images/Dallas.PNG";
import FW from "../Images/FW.PNG";

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
        <button onClick={() => dispatch({ type: "PREV" })}>‹</button>
        {[...slides, ...slides, ...slides].map((slide, i) => {
          let offset = slides.length + (state.slideIndex - i);
          return <Slide slide={slide} offset={offset} key={i} />;
        })}
        <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
      </div>
    </div>
  );
}

export default Carousel;
