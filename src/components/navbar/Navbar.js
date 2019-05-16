import React from 'react';

import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {},
  buttons: {
    marginRight: 15,
  },
});

class Navbar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
          <AppBar position="static" color="primary">
            <Toolbar color="inherit">
              <Button
                variant="outlined"
                component={Link}
                to="/"
                className={classes.buttons}
              >
                <HomeIcon/>
                Home
              </Button>
              <Button
                variant="outlined"
                component={Link}
                to="/registration"
                className={classes.buttons}
              >
                Sign Up
              </Button>
              <Button
                variant="outlined"
                component={Link}
                to="/login"
                className={classes.buttons}
              >
                Sign In
              </Button>
            </Toolbar>
          </AppBar>
    );
  }
}

export default withStyles(styles)(Navbar);
