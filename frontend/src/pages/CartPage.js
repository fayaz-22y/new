import React from 'react';
import { Link } from 'react-router-dom';
const CartPage = ({cartItems, removeFromCart, updateCartItemQuantity})=>{
  const total = cartItems.reduce((s,i)=>s+(i.price*i.quantity||0),0);
  return (
    <div className="container" style={{marginTop:80}}>
      <h2>Your Cart</h2>
      {cartItems.length===0 ? <div><p>Empty</p><Link to="/products">Shop</Link></div> :
      <div>
        {cartItems.map(i=>(
          <div key={i.id} style={{display:'flex',gap:12,alignItems:'center',padding:12,borderBottom:'1px solid #eee'}}>
            <img src={i.image_url||'https://via.placeholder.com/120'} style={{width:100,height:80,objectFit:'cover'}}/>
            <div style={{flex:1}}><strong>{i.name}</strong><div>${i.price}</div></div>
            <div>
              <button onClick={()=>updateCartItemQuantity(i.id, i.quantity-1)}>-</button>
              <span style={{padding:'0 8px'}}>{i.quantity}</span>
              <button onClick={()=>updateCartItemQuantity(i.id, i.quantity+1)}>+</button>
            </div>
            <button onClick={()=>removeFromCart(i.id)}>Remove</button>
          </div>
        ))}
        <div style={{textAlign:'right',padding:12}}><strong>Total: ${total.toFixed(2)}</strong><div style={{marginTop:8}}><Link to="/checkout" style={{padding:'0.6rem 1rem',background:'#27ae60',color:'#fff',borderRadius:6}}>Checkout</Link></div></div>
      </div>}
    </div>
  );
};
export default CartPage;
