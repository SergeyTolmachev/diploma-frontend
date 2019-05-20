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
    authType: "0",
  };

  componentDidMount = () => {
    const token = localStorage.getItem('token');
    const type = localStorage.getItem('type');
    if (token) {
      this.setState({ ...this.state, isAuth: true, authType: type}, () => {console.log(this.state)});
    }
  };

  handleExit = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('type');
    this.setState({ ...this.state, isAuth: false, type: "0"});
  };

  render() {
    const { classes } = this.props;
    const { isAuth, authType } = this.state;
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
              {
                isAuth && authType === "2" && <Button
                  variant="outlined"
                  component={Link}
                  to="/orders"
                  className={classes.buttons}
                >
                  Orders
                </Button>
              }

            </Toolbar>
          </AppBar>
    );
  }
}

export default withStyles(styles)(Navbar);
