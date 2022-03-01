import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyle from "./styles";
import ProNavbar from "./ProNavbar";
import { commerce } from "../../lib/commerce";

const Products = ({ products, onAddToCart }) => {
  const [cart, setCart] = useState({});

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };
  useEffect(() => {
    fetchCart();
  }, []);

  

  const classes = useStyle();
  
  return (
    <main className={classes.content}>
      <ProNavbar totalItems={cart.total_items} />
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
