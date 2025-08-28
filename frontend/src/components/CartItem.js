export default function CartItem({ item, onUpdate, onRemove }) {
  return (
    <div className="card cart-item">
      <img src={item.image_url} alt={item.name} />
      <div style={{flex:1}}>
        <h4>{item.name}</h4>
        <div>Qty: 
          <input type="number" min="1" value={item.quantity} 
                 onChange={(e)=>onUpdate(item.id, Number(e.target.value))} 
                 style={{marginLeft:8, width:64}}/>
        </div>
      </div>
      <div className="price">${(Number(item.price) * Number(item.quantity)).toFixed(2)}</div>
      <button className="btn ghost" onClick={()=>onRemove(item.id)}>Remove</button>
    </div>
  );
}
