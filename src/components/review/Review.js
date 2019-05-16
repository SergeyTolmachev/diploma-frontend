import React from 'react';
import axios from 'axios';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import ReviewForm from './ReviewForm';
import ReviewItem from './ReviewItem';

const styles = theme => ({
  reviewBox: {
    marginTop: 15,
    padding: 15,
  },
});

class Review extends React.Component {

  state = {
    reviews: [],
  };

  handleClick() {

  }

  async componentDidMount() {
    axios.get('/api/review/list')
      .then((reviews) => {
        this.setState({ reviews: reviews.data });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { classes } = this.props;
    const { reviews } = this.state;
    return (
      <Grid container xs={12} spacing={8}>
        <Grid item xs={12}>
          <Typography variant="body1" align="center"> Отзывы </Typography>
        </Grid>
        <Grid item xs={6}>
          {
            reviews && reviews.map(review => (
              <ReviewItem
                key={review.id}
                id={review.id}
                text={review.text}
                mark={review.mark}
                createdBy={review.createdBy}
                createdAt={review.createdAt}
              />
            ))
          }
        </Grid>
        <Grid item xs={6}>
          <ReviewForm/>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Review);
