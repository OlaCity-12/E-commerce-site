import React from 'react';
import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";
import Update from '../../Home/Update';
import { Grid, IconButton, Typography } from '@material-ui/core';
import useStyles from './Styles';
import CartItem from './CartItem/CartItem';
import { Link, NavLink } from "react-router-dom";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 25px;
  font-weight: 600;
  cursor: pointer;
  border: 0.5px solid lightgray;
  background-color: white;
  color: black;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const classes = useStyles();
  if (!cart.line_items) return 'Loading';
  

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">You have no items in your shopping cart,
      <Link className={classes.link} to="/">start adding some</Link>!
    </Typography>
  );

  const FilledCart = () => (
    <>
    <Grid container spacing={3}>
      {cart.line_items.map((item) => (
        <Grid item xs={12} sm={4} key={item.id}>
          <CartItem item={item} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart}/>
          </Grid>
      ))}
    </Grid>
    <div className={classes.cardDetails}>
      <div>
        <Button className={classes.emptyButton} size='small' type='button' variant='contained' color='secondary' onClick={onEmptyCart}>EMPTY CART</Button>
      </div>
    </div>
    </>
  )
  
  return <Container>
      <Update />
  <Wrapper>
    <Title>YOUR BAG</Title>
    <Top>
      
    <TopButton ><NavLink component={Link} to='/products'>KEEP SHOPPING</NavLink></TopButton>
      <TopButton >CHECKOUT NOW</TopButton>
      
    </Top>
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom></Typography>
      { !cart.line_items ? renderEmptyCart() : FilledCart() }
    </Container>
      <Summary>
        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
        <SummaryItem>
          <SummaryItemText>Subtotal</SummaryItemText>
          <SummaryItemPrice>$ 80</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem>
          <SummaryItemText>Estimated Shipping</SummaryItemText>
          <SummaryItemPrice>$ 5.90</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem>
          <SummaryItemText>Shipping Discount</SummaryItemText>
          <SummaryItemPrice>$ -5.90</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem type="total">
          <SummaryItemText>Total</SummaryItemText>
          <SummaryItemPrice>{ cart.subtotal.formatted_with_code }</SummaryItemPrice>
        </SummaryItem>
        <Button className={classes.checkoutButton} size='small' type='button' variant='contained' color='primary'>CHECKOUT NOW</Button>
      </Summary>
  </Wrapper>
</Container>

};


export default Cart;
