import React from 'react';
import { DateTime } from 'luxon';

import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

import deepOrange from '@material-ui/core/colors/deepOrange';

import StarIcon from '@material-ui/icons/Star';

const styles = theme => ({
  review: {
    padding: 10,
  },
  avatar: {
    backgroundColor: deepOrange[500],
  },
  text: {
    marginLeft: 5,
  }
});

function ReviewItem(props) {
  const {id, text, mark, createdAt, createdBy, classes} = props;

  let marks = [];

  if (mark) {
    for (let i = 1; i <= mark; i++) {
      marks.push(<StarIcon color="primary"/>);
    }
  }

  const date = DateTime.fromISO(createdAt).toFormat('D T');

  return (<Paper className={classes.review}>
      <Grid container spasing={8} xs={12}>
        <Grid item>
          <Avatar className={classes.avatar} xs={2}>
            {
              createdBy ? createdBy[0] : 'DU'
            }
          </Avatar>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body2" className={classes.text}>
            {text}
          </Typography>
          {marks}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2">{date} {createdBy ? createdBy : 'Default User'}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default withStyles(styles)(ReviewItem);
