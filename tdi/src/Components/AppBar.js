import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import "./AppBar.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    // color: "green",
  },
  backgroundColor: {
    backgroundColor: "green",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      color={classes.backgroundColor}
      className="appBar"
    >
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <div>
            <MenuIcon
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                Portfolio (Under Construction)
              </MenuItem>
              {/* <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem> */}
            </Menu>
          </div>
        </IconButton>

        <Typography variant="h6" className={classes.title}>
          Texas Drone Imaging
        </Typography>
        <a>
          <div class="flex icon" id="icon-3">
            <Button href="mailto: saul@texasdroneimaging.net" color="inherit">
              Contact
            </Button>
          </div>
        </a>
      </Toolbar>
    </AppBar>
  );
}
