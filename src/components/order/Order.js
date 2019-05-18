import React from 'react';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
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
    green: {
      pepperoni : {
        title: 'Пепперони',
        checked: false,
      },
      chicken: {
        title: 'Курица',
        checked: false,
      },
      becon: {
        title: 'Ветчина',
        checked: false,
      },
      farsh: {
        title: 'Фарш',
        checked: false,
      },
      sosiski: {
        title: 'Сосиски',
        checked: false,
      },
      anchous: {
        title: 'Анчоусы',
        checked: false,
      },
      bekon: {
        title: 'Бекон',
        checked: false,
      },
    },
    meat: [],
    size: [],
    thickness: [],
  };

  handleClickRadio = (event) => {
    if (event.target.name === 'size') {
      this.setState({...this.state, sizeValue: event.target.value});
    }
    if (event.target.name === 'thickness') {
      this.setState({...this.state, thicknessValue: event.target.value});
    }
  };

  handleClickCheckbox = (key) => (event) => {
    if (event.target.name.indexOf('meat') > -1) {
      const meat = {
        ...this.state.meat,
        [key]: {
          checked:  !this.state.meat[key].checked,
        },
      };
      this.setState({ ...this.state, meat });
    }
    if (event.target.name.indexOf('green') > -1) {
      const green = {
        ...this.state.green,
        [key]: {
          checked: !this.state.green[key].checked,
        },
      };
      this.setState({ ...this.state, green });
    }
  };

  render() {
    const {classes} = this.props;
    return (
      <form className={classes.form}>
        <Grid container>
          <Grid item xs={2}/>
          <Grid item xs={8} align="center">
            <Typography variant="h5" align="center">Онлайн заказ пиццы</Typography>
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="body1" align="center">Размер</Typography>
                  <RadioGroup name="size" row>
                    <FormControlLabel
                      value="size1"
                      control={<Radio onClick={this.handleClickRadio} checked={this.state.sizeValue === "size1"}/>}
                      label="Маленький"
                      id="size1"
                    />
                    <FormControlLabel
                      value="size2"
                      control={<Radio onClick={this.handleClickRadio} checked={this.state.sizeValue === "size2"}/>}
                      label="Средний"
                      id="size2"
                    />
                    <FormControlLabel
                      value="size3"
                      control={<Radio onClick={this.handleClickRadio} checked={this.state.sizeValue === "size3"} />}
                      label="Большой"
                      id="size3"
                    />
                  </RadioGroup>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" align="center">Толщина</Typography>
                <RadioGroup name="thickness" row>
                  <FormControlLabel
                    value="thickness1"
                    control={<Radio onClick={this.handleClickRadio} checked={this.state.thicknessValue === "thickness1"}/>}
                    label="Обычная"
                    id="thickness1"
                  />
                  <FormControlLabel
                    value="thickness2"
                    control={<Radio onClick={this.handleClickRadio} checked={this.state.thicknessValue === "thickness2"}/>}
                    label="Тонкая"
                    id="thickness2"
                  />
                  <FormControlLabel
                    value="thickness3"
                    control={<Radio onClick={this.handleClickRadio} checked={this.state.thicknessValue === "thickness3"} />}
                    label="Толстая"
                    id="thickness3"
                  />
                  <FormControlLabel
                    value="thickness4"
                    control={<Radio onClick={this.handleClickRadio} checked={this.state.thicknessValue === "thickness4"} />}
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
                      checked={!!this.state.meat[0]}
                      onClick={this.handleClickCheckbox}
                      value="150"
                      name="meat1"
                    />
                  }
                  label="Пепперони"
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" align="center">Овощи и фрукты</Typography>
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
          <Grid item xs={2}/>
        </Grid>
      </form>
    );
  }

}

export default withStyles(styles)(Order);
