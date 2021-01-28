import "./App.css";
import ButtonAppBar from "./Components/AppBar";
import SiteMap from "./Components/Map";
import About from "./Components/About";
import Carousel from "./Components/Carousel";

function App() {
  let mapCenter = { lat: 32.738773, lng: -97.003098 };

  let mapZoom = 12;
  return (
    <div className="App">
      <ButtonAppBar />
      <SiteMap center={mapCenter} zoom={mapZoom} />
      <About />
      <Carousel />
      <header className="App-header"></header>
    </div>
  );
}

export default App;
