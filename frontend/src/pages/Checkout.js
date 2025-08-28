import { useState } from 'react';
import api from '../services/api';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const { userId, cart, clearCart } = useCart();
  const [addr, setAddr] = useState({ street:'', city:'', state:'', zip:'' });
  const total = cart.reduce((s, i) => s + Number(i.price) * Number(i.quantity), 0);

  const placeOrder = async () => {
    const items = cart.map(i => ({ productId: i.product_id, quantity: i.quantity, price: i.price }));
    await api.post('/orders/create', { userId, items, shippingAddress: addr, totalAmount: total });
    await clearCart();
    alert('Order placed!');
  };

  return (
    <section className="card">
      <h2>Checkout</h2>
      <div style={{display:'grid', gap:12}}>
        <input placeholder="Street" value={addr.street} onChange={e=>setAddr({...addr, street:e.target.value})} />
        <input placeholder="City" value={addr.city} onChange={e=>setAddr({...addr, city:e.target.value})} />
        <input placeholder="State" value={addr.state} onChange={e=>setAddr({...addr, state:e.target.value})} />
        <input placeholder="ZIP" value={addr.zip} onChange={e=>setAddr({...addr, zip:e.target.value})} />
      </div>
      <div style={{marginTop:16, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <strong>Total: ${total.toFixed(2)}</strong>
        <button className="btn primary" onClick={placeOrder} disabled={cart.length===0}>Place Order</button>
      </div>
    </section>
  );
}
