export default function ProductCard({ product, onAdd }) {
  return (
    <div className="card">
      <img src={product.image_url} alt={product.name} />
      <h3>{product.name}</h3>
      <div className="badge">{product.category}</div>
      <p className="price">${Number(product.price).toFixed(2)}</p>
      <button className="btn primary" onClick={() => onAdd(product)}>Add to Cart</button>
    </div>
  );
}
