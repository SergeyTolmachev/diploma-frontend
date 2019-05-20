import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { MENU } from '../../config/constants';

function OrderItem(props) {
  const {id, meat, green, size, thickness, address, email, phone, name} = props;
  const meats = [];
  if (meat) {
    Object.keys(meat).forEach((key) => {
      if (meat[key]) {
        meats.push(<Typography variant="body2">{MENU.meat[key]}</Typography>);
      }
    });
  }
  const greens = [];
  if (green) {
    Object.keys(green).forEach((key) => {
      if (green[key]) {
        greens.push(<Typography variant="body2">{MENU.green[key]}</Typography>);
      }
    });
  }

  return (
    <Grid container>
      <Grid item xs={2}>
        <Typography variant="body2">{id}</Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body2">Адрес: {address}</Typography>
        <Typography variant="body2">Email: {email}</Typography>
        <Typography variant="body2">Номер телефона: {phone}</Typography>
        <Typography variant="body2">Имя: {name}</Typography>
        <Paper>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="body1">Размер</Typography>
              <Typography variant="body2">{MENU.size[size - 1]}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">Толщина</Typography>
              <Typography variant="body2">{MENU.thickness[thickness - 1]}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">Мясо</Typography>
              {meats}
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">Овощи и фрукты</Typography>
              {greens}
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default OrderItem;
