import React from 'react';
import axios from 'axios';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

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
      <div className={classes.reviewBox}>
        <Typography variant="body1" align="center"> Отзывы </Typography>
        {
          reviews && reviews.map(review => (
            <ReviewItem
              key={review.id}
              id={review.id}
              text={review.text}
              mark={review.mark}
              createdBy={review.createdBy}
            />
          ))
        }
      </div>
    );
  }
}

export default withStyles(styles)(Review);
