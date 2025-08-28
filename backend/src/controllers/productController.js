const pool = require('../config/database');

const productController = {
  async getAllProducts(req, res) {
    try {
      const [rows] = await pool.query('SELECT * FROM products WHERE is_active = 1');
      res.json(rows);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: 'Failed to fetch products' });
    }
  },

  async getProductById(req, res) {
    try {
      const { id } = req.params;
      const [rows] = await pool.query('SELECT * FROM products WHERE id = ? AND is_active = 1', [id]);
      if (rows.length === 0) return res.status(404).json({ error: 'Product not found' });
      res.json(rows[0]);
    } catch (error) {
      console.error('Error fetching product:', error);
      res.status(500).json({ error: 'Failed to fetch product' });
    }
  },

  async searchProducts(req, res) {
    try {
      const { q } = req.query;
      const searchQuery = `%${q || ''}%`;
      const [rows] = await pool.query(
        'SELECT * FROM products WHERE (name LIKE ? OR description LIKE ?) AND is_active = 1',
        [searchQuery, searchQuery]
      );
      res.json(rows);
    } catch (error) {
      console.error('Error searching products:', error);
      res.status(500).json({ error: 'Failed to search products' });
    }
  }
};

module.exports = productController;
