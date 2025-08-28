const pool = require('../config/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userController = {
  async register(req, res) {
    try {
      const { email, password, firstName, lastName } = req.body;
      const [existing] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
      if (existing.length > 0) return res.status(400).json({ error: 'User already exists' });

      const hashedPassword = await bcrypt.hash(password, 10);
      const [result] = await pool.query(
        'INSERT INTO users (email, password, first_name, last_name) VALUES (?, ?, ?, ?)',
        [email, hashedPassword, firstName, lastName]
      );

      const token = jwt.sign({ userId: result.insertId, email }, process.env.JWT_SECRET || 'secret', { expiresIn: '24h' });
      res.status(201).json({ 
        message: 'User registered successfully',
        token,
        user: { id: result.insertId, email, firstName, lastName }
      });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'Failed to register user' });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const [users] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
      if (users.length === 0) return res.status(401).json({ error: 'Invalid credentials' });

      const user = users[0];
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) return res.status(401).json({ error: 'Invalid credentials' });

      const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET || 'secret', { expiresIn: '24h' });
      res.json({ 
        message: 'Login successful',
        token,
        user: { id: user.id, email: user.email, firstName: user.first_name, lastName: user.last_name }
      });
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ error: 'Failed to login' });
    }
  }
};

module.exports = userController;
