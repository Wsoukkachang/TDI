import "./App.css";
import {
  AppBar,
  Toolbar,
  IconButton,
  Card,
  FormControlLabel,
  Switch,
  Typography,
  TextField,
  Button,
  CardActionArea,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ButtonAppBar from "./Components/AppBar";
import Map from "./Components/Map";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Map />
      <header className="App-header"></header>
    </div>
  );
}

export default App;
