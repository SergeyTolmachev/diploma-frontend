import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  footer: {
    padding: 18,
    marginTop: 15,
  }
});

function Footer(props) {
  const { classes } = props;
  return (
    <AppBar position="static" color="primary" className={classes.footer}>
      <Typography variant="body2" align="center">
        Все что Вы видите на данном сайте, сделано
        <Link
          target="_blank"
          color="inherit"
          href="https://vk.com/soren_bjerg"
        >
          Толмачевым Марком </Link>
        © 2019
      </Typography>
    </AppBar>
  )
}

export default withStyles(styles)(Footer);
