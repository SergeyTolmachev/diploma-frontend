import React from 'react';
import axios from 'axios';


import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

import {withStyles} from '@material-ui/core/styles';

import StarIcon from '@material-ui/icons/Star';

import ReviewItem from './ReviewItem';

const styles = theme => ({
  form: {
    width: '100%',
  },
  onLoad: {
    marginLeft: '45%',
  },
  review: {
    marginTop: 10,
    padding: 10,
  },
  reviewBox: {
    marginTop: 15,
    padding: 15,
  },
  star: {
    marginTop: 5,
    marginBottom: 5,
  },
});

class Review extends React.Component {

  state = {
    reviews: [],
    text: '',
    mark: 3,
    isAuth: false,
  };

  createReview = (target) => {
    const token = localStorage.getItem('token');

    axios({
      method: 'post',
      url: 'api/review/',
      data: {
        text: this.state.text,
        mark: this.state.mark,
      },
      headers: {
        token,
      },
    }).then(() => {
      this.getReviews();
    }).catch((error) => {
      console.log(error);
    })
  };

  handleChange = (event) => {
    this.setState({...this.state, text: event.target.value}, () => {
      console.log(this.state)
    });
  };

  handleOnClick = mark => event => {
    this.setState({...this.state, mark});
  };

  getReviews = () => {
    axios.get('/api/review/list')
      .then((reviews) => {
        this.setState({reviews: reviews.data});
      })
      .catch(error => console.log(error));
  };

  componentDidMount = () => {
    const token = localStorage.getItem('token');
    if (token) {
      this.setState({...this.state, isAuth: true});
    }
    this.getReviews();
  };

  render() {
    const {classes} = this.props;
    const {mark, reviews, isAuth} = this.state;
    return (
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Typography variant="body1" align="center"> Отзывы </Typography>
        </Grid>
        <Grid item xs={6}>
          {
            !reviews || !reviews.length && <CircularProgress className={classes.onLoad}/>
          }
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
          <Paper>
            <form className={classes.form}>
              <Typography variant="body1" align="center">Оставить отзыв</Typography>
              <FormControl required fullWidth>
                <TextField multiline rows={6} onChange={this.handleChange} id="text" name="text"
                           label="Оставить отзыв"/>
              </FormControl>
              <StarIcon className={classes.star} onClick={this.handleOnClick(1)}
                        color={1 <= mark ? "primary" : "inherit"}/>
              <StarIcon className={classes.star} onClick={this.handleOnClick(2)}
                        color={2 <= mark ? "primary" : "inherit"}/>
              <StarIcon className={classes.star} onClick={this.handleOnClick(3)}
                        color={3 <= mark ? "primary" : "inherit"}/>
              <StarIcon className={classes.star} onClick={this.handleOnClick(4)}
                        color={4 <= mark ? "primary" : "inherit"}/>
              <StarIcon className={classes.star} onClick={this.handleOnClick(5)}
                        color={5 <= mark ? "primary" : "inherit"}/>
              <Tooltip
                title="Для отравки отзыва требуется авторизоваться"
                disableFocusListener={isAuth}
                disableHoverListener={isAuth}
              >
                <span>
                                  <Button
                                    variant="contained"
                                    color="secondary"
                                    size="small"
                                    fullWidth
                                    onClick={this.createReview}
                                    disabled={!isAuth}
                                  >
                  Отправить
                </Button>
                </span>
              </Tooltip>
            </form>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Review);
