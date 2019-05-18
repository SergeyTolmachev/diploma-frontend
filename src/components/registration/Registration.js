import React from 'react';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  review: {
    marginTop: 10,
    padding: 10,
  },
  button: {
    align: "center",
  },
  form: {
    width: '100%',
    padding: 10,
    marginBottom: 20,
  },
});

class Registration extends React.Component {

  state = {
    login: '',
    name: '',
    password: '',
    email: '',
    invite: '',
  };

  handleClick = (target) => {
    axios({
      method: 'post',
      url: 'api/user/registration',
      data: {
        ...this.state,
      },
    }).then((result) => {
      localStorage.setItem('token', result.data.token);
      window.location.reload();
    }).catch((error) => {
      console.log(error);
    })
  };

  handleChange = (event) => {
    if (event.target.id === 'login') {
      this.setState({ ...this.state, login: event.target.value});
    }
    if (event.target.id === 'password') {
      this.setState({ ...this.state, password: event.target.value});
    }
    if (event.target.id === 'name') {
      this.setState({ ...this.state, name: event.target.value});
    }
    if (event.target.id === 'email') {
      this.setState({ ...this.state, email: event.target.value});
    }
    if (event.target.id === 'invite') {
      this.setState({ ...this.state, invite: event.target.value});
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.form}>
        <Grid container>
          <Grid item xs={4}/>
          <Grid item xs={4}>
            <Typography variant="body1" align="center">Зарегистрироваться</Typography>
            <FormControl required fullWidth>
              <TextField
                onChange={this.handleChange}
                id="login"
                name="login"
                label="Логин"
                variant="outlined"
                required
              />
              <TextField
                onChange={this.handleChange}
                id="name"
                name="name"
                label="Имя. отображаемое на сайте"
                variant="outlined"
                required
              />
              <TextField
                onChange={this.handleChange}
                type="password"
                id="password"
                name="password"
                label="Пароль"
                variant="outlined"
                required
              />
              <TextField
                onChange={this.handleChange}
                id="email"
                name="email"
                label="email"
                variant="outlined"
                required
              />
              <TextField
                onChange={this.handleChange}
                id="invite"
                name="invite"
                label="Инвайт"
                variant="outlined"
                placeholder="Если у вас есть инвайт введите, иначе оставьте поле пустым"
              />
            </FormControl>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              fullWidth
              onClick={this.handleClick}
            >
              Регистрация
            </Button>
          </Grid>
          <Grid item xs={4}/>
        </Grid>
      </form>
    );
  }

}

export default withStyles(styles)(Registration);
