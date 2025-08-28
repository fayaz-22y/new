import React, {useEffect, useState} from 'react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';
const Products = ({addToCart})=>{
  const [products,setProducts]=useState([]);
  const [loading,setLoading]=useState(true);
  useEffect(()=>{axios.get(process.env.REACT_APP_API_URL + '/products').then(r=>setProducts(r.data)).catch(()=>{}).finally(()=>setLoading(false))},[]);
  if(loading) return <div className="container" style={{marginTop:80}}>Loading...</div>
  return (
    <div className="container" style={{marginTop:80}}>
      <h2>Products</h2>
      <div className="products-grid">
        {products.map(p=> <ProductCard key={p.id} product={p} addToCart={addToCart} />)}
      </div>
    </div>
  );
};
export default Products;
