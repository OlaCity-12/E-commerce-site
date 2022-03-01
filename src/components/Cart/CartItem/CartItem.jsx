import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import useStyles from './Styles';


const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart}) => {
    const classes = useStyles();


  return <div>
      <Card sx={{ maxWidth: 245 }}>
          <CardMedia image={item.image.url}  alt={item.name} className={classes.media} height="140" />
          <CardContent className={classes.cardContent}>
              <Typography variant='h4'>{item.name}</Typography>
              <Typography variant='h5'>{item.line_total.formatted_with_symbol}</Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
              <div>
                  <Button type='button' size='small'onClick={() => onUpdateCartQty(item.id, item.quantity -1)}>-</Button>
                  <Typography>{item.quantity}</Typography>
                  <Button type='button' size='small'onClick={() => onUpdateCartQty(item.id, item.quantity +1)}>+</Button>
              </div>
              <Button variant="contained" type="button" color="secondary" onClick={() => onRemoveFromCart(item.id)}>Remove</Button>
          </CardActions>
      </Card>
  </div>;
};

export default CartItem;
