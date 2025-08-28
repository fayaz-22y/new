const pool = require('../config/database');

const orderController = {
  async createOrder(req, res) {
    const connection = await pool.getConnection();
    try {
      await connection.beginTransaction();
      const { userId, items, shippingAddress, totalAmount } = req.body;

      const [orderResult] = await connection.query(
        'INSERT INTO orders (user_id, total_amount, shipping_address, status) VALUES (?, ?, ?, ?)',
        [userId, totalAmount, JSON.stringify(shippingAddress || {}), 'pending']
      );
      const orderId = orderResult.insertId;

      for (const item of items || []) {
        await connection.query(
          'INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)',
          [orderId, item.productId, item.quantity, item.price]
        );
      }

      await connection.query('DELETE FROM cart WHERE user_id = ?', [userId]);
      await connection.commit();
      res.status(201).json({ message: 'Order placed successfully', orderId });
    } catch (error) {
      await connection.rollback();
      console.error('Error creating order:', error);
      res.status(500).json({ error: 'Failed to create order' });
    } finally {
      connection.release();
    }
  },

  async getUserOrders(req, res) {
    try {
      const { userId } = req.params;
      const [orders] = await pool.query(
        'SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC',
        [userId]
      );
      res.json(orders);
    } catch (error) {
      console.error('Error fetching orders:', error);
      res.status(500).json({ error: 'Failed to fetch orders' });
    }
  },

  async getOrderById(req, res) {
    try {
      const { id } = req.params;
      const [order] = await pool.query('SELECT * FROM orders WHERE id = ?', [id]);
      if (order.length === 0) return res.status(404).json({ error: 'Order not found' });

      const [items] = await pool.query(
        `SELECT oi.*, p.name, p.image_url 
         FROM order_items oi 
         JOIN products p ON oi.product_id = p.id 
         WHERE oi.order_id = ?`,
        [id]
      );
      res.json({ ...order[0], items });
    } catch (error) {
      console.error('Error fetching order:', error);
      res.status(500).json({ error: 'Failed to fetch order' });
    }
  }
};

module.exports = orderController;
