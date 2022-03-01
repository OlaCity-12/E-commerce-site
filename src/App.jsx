import React, { useState, useEffect }  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { commerce } from './lib/commerce';
import Footer from './components/Footer/Footer';
import Homepage from "./Home/Homepage";
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';




function App({  }) {
  const [products, setProducts] = useState([]);
  

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const [cart, setCart] = useState({});

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
  };
  

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart }  = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  


  return (
    <div>
      <Router>
        <Routes>
          <Route
          exact path="/"
          element={<Homepage />}
          />
           <Route
          exact path="/products"
          element={<Products products={products} onAddToCart={handleAddToCart} />}
          />
         <Route
          exact path="/cart"
          element={<Cart cart={cart} 
          onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart}
          />}
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
