import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

function App(){
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    const existing = cartItems.find(i=>i.id===product.id);
    if(existing) setCartItems(cartItems.map(i=>i.id===product.id?{...i,quantity:i.quantity+1}:i));
    else setCartItems([...cartItems,{...product,quantity:1}]);
  };
  const removeFromCart = (id)=> setCartItems(cartItems.filter(i=>i.id!==id));
  const updateCartItemQuantity = (id, q)=> setCartItems(cartItems.map(i=>i.id===id?{...i,quantity:q}:i).filter(i=>i.quantity>0));
  return (
    <Router>
      <Header cartItemsCount={cartItems.reduce((s,i)=>s+i.quantity,0)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} updateCartItemQuantity={updateCartItemQuantity} />} />
        <Route path="/checkout" element={<CheckoutPage cartItems={cartItems} />} />
      </Routes>
    </Router>
  );
}
export default App;
