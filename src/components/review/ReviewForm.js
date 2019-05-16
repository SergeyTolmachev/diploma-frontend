import React from 'react';

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  review: {
    marginTop: 10,
    padding: 10,
  },
  button: {
    align: "center",
  }
});

function ReviewForm (props) {
  const { classes } = props;
  return (<Paper>
      <Typography variant="body1" align="center">Оставить отзыв</Typography>
      <FormControl className={classes.button}>
        <Input placeholder="Оставить отзыв"/>
        <Button variant="contained" color="secondary" size="small">Отправить</Button>
      </FormControl>
    </Paper>
  );
}

export default withStyles(styles)(ReviewForm);
