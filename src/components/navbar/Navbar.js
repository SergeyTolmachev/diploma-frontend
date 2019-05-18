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

  state = {
    isAuth: false,
  };

  componentDidMount = () => {
    const token = localStorage.getItem('token');
    if (token) {
      this.setState({ ...this.state, isAuth: true});
    }
  };

  handleExit = () => {
    localStorage.removeItem('token');
    this.setState({ ...this.state, isAuth: false});
  };

  render() {
    const { classes } = this.props;
    const { isAuth } = this.state;
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
              {
                !isAuth && <Button
                  variant="outlined"
                  component={Link}
                  to="/registration"
                  className={classes.buttons}
                >
                  Sign Up
                </Button>
              }
              {
                !isAuth && <Button
                  variant="outlined"
                  component={Link}
                  to="/login"
                  className={classes.buttons}
                >
                  Sign In
                </Button>
              }
              {
                isAuth && <Button
                  variant="outlined"
                  component={Link}
                  to="/"
                  className={classes.buttons}
                  onClick={this.handleExit}
                >
                  Log out
                </Button>
              }

            </Toolbar>
          </AppBar>
    );
  }
}

export default withStyles(styles)(Navbar);
