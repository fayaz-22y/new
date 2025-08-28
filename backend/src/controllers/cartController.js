const pool = require('../config/database');

const cartController = {
  async getCart(req, res) {
    try {
      const userId = req.params.userId;
      const [rows] = await pool.query(
        `SELECT c.*, p.name, p.price, p.image_url 
         FROM cart c 
         JOIN products p ON c.product_id = p.id 
         WHERE c.user_id = ?`,
        [userId]
      );
      res.json(rows);
    } catch (error) {
      console.error('Error fetching cart:', error);
      res.status(500).json({ error: 'Failed to fetch cart' });
    }
  },

  async addToCart(req, res) {
    try {
      const { userId, productId, quantity } = req.body;
      const qty = Math.max(1, Number(quantity) || 1);

      const [existing] = await pool.query(
        'SELECT * FROM cart WHERE user_id = ? AND product_id = ?',
        [userId, productId]
      );

      if (existing.length > 0) {
        await pool.query(
          'UPDATE cart SET quantity = quantity + ? WHERE user_id = ? AND product_id = ?',
          [qty, userId, productId]
        );
      } else {
        await pool.query(
          'INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)',
          [userId, productId, qty]
        );
      }

      res.json({ message: 'Item added to cart successfully' });
    } catch (error) {
      console.error('Error adding to cart:', error);
      res.status(500).json({ error: 'Failed to add item to cart' });
    }
  },

  async updateCartItem(req, res) {
    try {
      const { id } = req.params;
      const { quantity } = req.body;
      const qty = Number(quantity) || 0;

      if (qty <= 0) {
        await pool.query('DELETE FROM cart WHERE id = ?', [id]);
        res.json({ message: 'Item removed from cart' });
      } else {
        await pool.query('UPDATE cart SET quantity = ? WHERE id = ?', [qty, id]);
        res.json({ message: 'Cart updated successfully' });
      }
    } catch (error) {
      console.error('Error updating cart:', error);
      res.status(500).json({ error: 'Failed to update cart' });
    }
  },

  async removeFromCart(req, res) {
    try {
      const { id } = req.params;
      await pool.query('DELETE FROM cart WHERE id = ?', [id]);
      res.json({ message: 'Item removed from cart' });
    } catch (error) {
      console.error('Error removing from cart:', error);
      res.status(500).json({ error: 'Failed to remove item from cart' });
    }
  },

  async clearCart(req, res) {
    try {
      const { userId } = req.params;
      await pool.query('DELETE FROM cart WHERE user_id = ?', [userId]);
      res.json({ message: 'Cart cleared successfully' });
    } catch (error) {
      console.error('Error clearing cart:', error);
      res.status(500).json({ error: 'Failed to clear cart' });
    }
  }
};

module.exports = cartController;
