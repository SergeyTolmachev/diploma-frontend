import React from 'react';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

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

class Order extends React.Component {

  state = {
    meat: {
      pepperoni : false,
      chicken: false,
      becon: false,
      farsh: false,
      sosiski: false,
      anchous: false,
      bekon: false,
    },
    green: {
      onion: false,
      mushroom: false,
      tomato: false,
      pineapple: false,
      pepper: false,
      halapenio: false,
      golives: false,
      bolives: false,
      chilli: false,
    },
    size: "1",
    thickness: "1",
  };

  handleClick = () => {
    axios({
      method: 'post',
      url: 'api/order/',
      data: { ...this.state },
    }).then((result) => {
      window.location.reload();
    }).catch((error) => {
      console.log(error);
    })
  };

  handleClickRadio = (event) => {
    if (event.target.name === 'size') {
      this.setState({...this.state, size: event.target.value});
    }
    if (event.target.name === 'thickness') {
      this.setState({...this.state, thickness: event.target.value});
    }
  };

  handleClickCheckbox = (key) => (event) => {
    if (event.target.name.indexOf('meat') > -1) {
      const meat = {
        ...this.state.meat,
        [key]: !this.state.meat[key],
      };
      this.setState({ ...this.state, meat });
    }
    if (event.target.name.indexOf('green') > -1) {
      const green = {
        ...this.state.green,
        [key]: !this.state.green[key],
      };
      this.setState({ ...this.state, green });
    }
  };

  handleChange = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.value});
  };

  render() {
    const {classes} = this.props;
    const { meat, green, size, thickness } = this.state;
    return (
      <form className={classes.form}>
        <Grid container>
          <Grid item xs={12} align="center">
            <Typography variant="h5" align="center">Онлайн заказ пиццы</Typography>
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="body1" align="center">Размер</Typography>
                  <RadioGroup name="size" row>
                    <FormControlLabel
                      value="1"
                      control={<Radio onClick={this.handleClickRadio} checked={size === "1"}/>}
                      label="Маленький"
                      id="size1"
                    />
                    <FormControlLabel
                      value="2"
                      control={<Radio onClick={this.handleClickRadio} checked={size === "2"}/>}
                      label="Средний"
                      id="size2"
                    />
                    <FormControlLabel
                      value="3"
                      control={<Radio onClick={this.handleClickRadio} checked={size === "3"} />}
                      label="Большой"
                      id="size3"
                    />
                  </RadioGroup>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" align="center">Толщина</Typography>
                <RadioGroup name="thickness" row>
                  <FormControlLabel
                    value="1"
                    control={<Radio onClick={this.handleClickRadio} checked={thickness === "1"}/>}
                    label="Обычная"
                    id="thickness1"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio onClick={this.handleClickRadio} checked={thickness === "2"}/>}
                    label="Тонкая"
                    id="thickness2"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio onClick={this.handleClickRadio} checked={thickness === "3"} />}
                    label="Толстая"
                    id="thickness3"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Radio onClick={this.handleClickRadio} checked={thickness === "4"} />}
                    label="Очень толстая"
                    id="thickness4"
                  />
                </RadioGroup>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="body1" align="center">Мясо</Typography>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={meat.pepperoni}
                      onClick={this.handleClickCheckbox('pepperoni')}
                      value="150"
                      name="meat1"
                    />
                  }
                  label="Пепперони"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={meat.chicken}
                      onClick={this.handleClickCheckbox('chicken')}
                      value="150"
                      name="meat2"
                    />
                  }
                  label="Курица"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={meat.becon}
                      onClick={this.handleClickCheckbox('becon')}
                      value="150"
                      name="meat3"
                    />
                  }
                  label="Ветчина"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={meat.farsh}
                      onClick={this.handleClickCheckbox('farsh')}
                      value="150"
                      name="meat4"
                    />
                  }
                  label="Фарш"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={meat.sosiski}
                      onClick={this.handleClickCheckbox('sosiski')}
                      value="150"
                      name="meat5"
                    />
                  }
                  label="Сосиски"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={meat.anchous}
                      onClick={this.handleClickCheckbox('anchous')}
                      value="150"
                      name="meat6"
                    />
                  }
                  label="Анчоусы"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={meat.bekon}
                      onClick={this.handleClickCheckbox('bekon')}
                      value="150"
                      name="meat7"
                    />
                  }
                  label="Бекон"
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" align="center">Овощи и фрукты</Typography>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={green.onion}
                      onClick={this.handleClickCheckbox('onion')}
                      value="150"
                      name="green1"
                    />
                  }
                  label="Лук"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={green.mushroom}
                      onClick={this.handleClickCheckbox('mushroom')}
                      value="150"
                      name="green2"
                    />
                  }
                  label="Грибы"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={green.tomato}
                      onClick={this.handleClickCheckbox('tomato')}
                      value="150"
                      name="green3"
                    />
                  }
                  label="Помидоры"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={green.pineapple}
                      onClick={this.handleClickCheckbox('pineapple')}
                      value="150"
                      name="green4"
                    />
                  }
                  label="Ананас"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={green.pepper}
                      onClick={this.handleClickCheckbox('pepper')}
                      value="150"
                      name="green5"
                    />
                  }
                  label="Болгарский перец"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={green.halapenio}
                      onClick={this.handleClickCheckbox('halapenio')}
                      value="150"
                      name="green6"
                    />
                  }
                  label="Халапеньо"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={green.golives}
                      onClick={this.handleClickCheckbox('golives')}
                      value="150"
                      name="green7"
                    />
                  }
                  label="Зеленые оливки"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={green.bolives}
                      onClick={this.handleClickCheckbox('bolives')}
                      value="150"
                      name="green8"
                    />
                  }
                  label="Черные оливки"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={green.chilli}
                      onClick={this.handleClickCheckbox('chilli')}
                      value="150"
                      name="green9"
                    />
                  }
                  label="Перец чили"
                />
              </Grid>
            </Grid>
            <TextField
              onChange={this.handleChange}
              id="address"
              name="address"
              label="Адрес доставки"
              variant="outlined"
              required
              fullWidth
              margin="dense"
            />
            <TextField
              onChange={this.handleChange}
              id="name"
              name="name"
              label="Имя"
              variant="outlined"
              required
              fullWidth
              margin="dense"
            />
            <TextField
              onChange={this.handleChange}
              id="email"
              name="email"
              label="email"
              variant="outlined"
              required
              fullWidth
              margin="dense"
            />
            <TextField
              onChange={this.handleChange}
              id="phone"
              name="phone"
              label="Номер телефона"
              variant="outlined"
              required
              fullWidth
              margin="dense"
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={this.handleClick}
            >
              Оформить заказ
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }

}

export default withStyles(styles)(Order);
