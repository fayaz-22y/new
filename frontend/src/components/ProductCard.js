import React from 'react';
const ProductCard = ({product, addToCart})=>(
  <div className="product-card">
    <img src={product.image_url || 'https://via.placeholder.com/400x300'} alt={product.name} />
    <h3>{product.name}</h3>
    <p style={{color:'#666'}}>{product.description}</p>
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      <strong>${product.price}</strong>
      <button className="add-to-cart-btn" onClick={()=>addToCart(product)}>Add</button>
    </div>
  </div>
);
export default ProductCard;
