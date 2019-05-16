import React from 'react';

import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  review: {
    marginTop: 10,
    padding: 10,
  },
});

function ReviewItem (props) {
  const { id, text, mark, createdBy, classes } = props;
  return (<Paper className={classes.review}>
      {id}: {text} - {mark} {createdBy}
    </Paper>
  );
}

export default withStyles(styles)(ReviewItem);
