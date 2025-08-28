import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Cart() {
  const { cart, loading, updateItem, removeItem, clearCart } = useCart();
  const nav = useNavigate();
  const total = cart.reduce((sum, i) => sum + Number(i.price) * Number(i.quantity), 0);

  if (loading) return <p>Loading cart...</p>;

  return (
    <section>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <div className="card">Cart is empty. <Link to="/products">Shop now</Link></div>
      ) : (
        <>
          {cart.map(item => (
            <CartItem key={item.id} item={item} onUpdate={updateItem} onRemove={removeItem} />
          ))}
          <div className="card" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <strong>Total: ${total.toFixed(2)}</strong>
            <div>
              <button className="btn ghost" onClick={clearCart}>Clear</button>
              <button className="btn primary" style={{marginLeft:8}} onClick={()=>nav('/checkout')}>Checkout</button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
