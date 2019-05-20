import React from 'react';
import axios from 'axios';

import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import OrderItem from './OrderItem';

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

class Orders extends React.Component {

  state = {
    orders: [],
  };

  componentDidMount = () => {
    const token = localStorage.getItem('token');
    axios({
      method: 'get',
      url: 'api/order/list',
      headers: {
        token,
      },
    }).then((result) => {
      this.setState({ ...this.state, orders: result.data })
    }).catch((error) => {
      console.log(error);
    })
  };

  render() {
    const { orders } = this.state;
    return (
      <Grid>
        <Typography variant="h5" align="center">Заказы</Typography>
        {
          !orders && <CircularProgress/>
        }
    {
      orders && orders.map(order => (
        <OrderItem
          id={order.id}
          key={order.id}
          meat={order.meat}
          green={order.green}
          size={order.size}
          thickness={order.thickness}
          address={order.address}
          email={order.email}
          phone={order.phone}
          name={order.name}
        />
      ))
    }
      </Grid>
    );
  }

}

export default withStyles(styles)(Orders);
