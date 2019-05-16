import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Grid from '@material-ui/core/Grid';

import Footer from '../components/footer/Footer';
import Home from '../components/home/Home';
import Login from '../components/login/Login';
import Navbar from '../components/navbar/Navbar';
import Registration from '../components/registration/Registration';
import Review from '../components/review/Review';



class MainLayout extends React.Component {
  render() {
    return (
      <Grid container xs={12}>
        <Grid item xs={12}>
          <Navbar/>
        </Grid>
        <Grid item xs={2}/>
        <Grid item xs={8}>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/registration' component={Registration}></Route>
          </Switch>
          <Review/>
        </Grid>
        <Grid item xs={2}/>
        <Grid item xs={12}>
          <Footer/>
        </Grid>
      </Grid>
    )
  }
}

export default MainLayout;
