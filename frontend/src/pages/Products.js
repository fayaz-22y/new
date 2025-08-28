import { useEffect, useState } from 'react';
import api from '../services/api';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [q, setQ] = useState('');
  const { addToCart } = useCart();

  const fetchProducts = async () => {
    const url = q ? `/products/search?q=${encodeURIComponent(q)}` : '/products';
    const { data } = await api.get(url);
    setProducts(data);
  };

  useEffect(() => { fetchProducts(); }, []);

  return (
    <section>
      <div className="card" style={{marginBottom:16}}>
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search products..."/>
        <button className="btn ghost" onClick={fetchProducts} style={{marginLeft:8}}>Search</button>
      </div>
      <div className="grid">
        {products.map(p => (
          <ProductCard key={p.id} product={p} onAdd={() => addToCart(p.id, 1)} />
        ))}
      </div>
    </section>
  );
}
