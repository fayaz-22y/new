import React, {useState} from 'react';
import axios from 'axios';
const CheckoutPage = ({cartItems})=>{
  const [info,setInfo]=useState({name:'',email:'',address:''});
  const submit = async(e)=>{e.preventDefault(); try{ await axios.post(process.env.REACT_APP_API_URL + '/orders', {customerInfo:info, items:cartItems}); alert('Order placed') }catch(e){ alert('Failed') }};
  const total = cartItems.reduce((s,i)=>s+(i.price*i.quantity||0),0);
  return (
    <div className="container" style={{marginTop:80}}>
      <h2>Checkout</h2>
      <form onSubmit={submit} style={{display:'grid',gridTemplateColumns:'1fr 320px',gap:20}}>
        <div>
          <input placeholder="Full name" value={info.name} onChange={e=>setInfo({...info,name:e.target.value})} required />
          <input placeholder="Email" value={info.email} onChange={e=>setInfo({...info,email:e.target.value})} required />
          <input placeholder="Address" value={info.address} onChange={e=>setInfo({...info,address:e.target.value})} required />
          <button style={{marginTop:8}}>Place Order (${total.toFixed(2)})</button>
        </div>
        <div style={{background:'#f8f9fa',padding:12,borderRadius:8}}>
          <h4>Summary</h4>
          {cartItems.map(i=><div key={i.id} style={{display:'flex',justifyContent:'space-between'}}>{i.name}<span>${(i.price*i.quantity).toFixed(2)}</span></div>)}
          <hr/>
          <div style={{display:'flex',justifyContent:'space-between'}}><strong>Total</strong><strong>${total.toFixed(2)}</strong></div>
        </div>
      </form>
    </div>
  );
};
export default CheckoutPage;
