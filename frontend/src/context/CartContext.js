import { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [userId] = useState(1); // demo user
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadCart = async () => {
    setLoading(true);
    try {
      const { data } = await api.get(`/cart/${userId}`);
      setCart(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadCart(); }, []);

  const addToCart = async (productId, quantity = 1) => {
    await api.post('/cart/add', { userId, productId, quantity });
    await loadCart();
  };

  const updateItem = async (id, quantity) => {
    await api.put(`/cart/item/${id}`, { quantity });
    await loadCart();
  };

  const removeItem = async (id) => {
    await api.delete(`/cart/item/${id}`);
    await loadCart();
  };

  const clearCart = async () => {
    await api.delete(`/cart/clear/${userId}`);
    await loadCart();
  };

  return (
    <CartContext.Provider value={{ userId, cart, loading, addToCart, updateItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
