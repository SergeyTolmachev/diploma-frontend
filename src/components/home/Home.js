import React from 'react';

import { Link as RouterLink } from 'react-router-dom';

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  paragraph: {
    marginTop: 10,
  }
});

function Home(props) {
  const { classes } = props;
  return (
    <div>
      <Typography variant="h5" align="center" className={classes.paragraph}>
        Добро пожаловать!
      </Typography>
      <Typography variant="body1">
        Мы рады приветствовать Вас на сайте нашей пиццерии.
      </Typography>
      <Typography variant="body1">
        Мы готовим лучшую пиццу в нашем городе и постараемся оправдать ваши ожидания.
      </Typography>
      <Typography variant="body1">
        Для оформления заказа перейдите по ссылке:
        <Link component={RouterLink} to='/order' color="secondary"> оформить заказ </Link>
      </Typography>
      <Typography variant="body1">
        Для регистрации:
        <Link component={RouterLink} to='/registration' color="secondary"> регистрация </Link>
      </Typography>
      <Typography variant="body1">
        Для авторизации:
        <Link component={RouterLink} to='/login' color="secondary"> авторизация </Link>
      </Typography>
    </div>
  )
}

export default withStyles(styles)(Home);
