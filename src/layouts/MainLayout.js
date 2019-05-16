import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import Footer from '../components/footer/Footer';
import Home from '../components/home/Home';
import Login from '../components/login/Login';
import Navbar from '../components/navbar/Navbar';
import Paper from '@material-ui/core/Paper';
import Registration from '../components/registration/Registration';
import Review from '../components/review/Review';

const styles = theme => ({
  main: {
    padding: 15,
    marginTop: 10,
  },
});

class MainLayout extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container xs={12}>
        <Grid item xs={12}>
          <Navbar/>
        </Grid>
        <Grid item xs={2}/>
        <Grid item xs={8}>
          <Paper className={classes.main}>
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route path='/login' component={Login}></Route>
              <Route path='/registration' component={Registration}></Route>
            </Switch>
            <Review/>
          </Paper>
        </Grid>
        <Grid item xs={2}/>
        <Grid item xs={12}>
          <Footer/>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(MainLayout);
