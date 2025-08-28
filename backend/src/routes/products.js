const express = require('express');
const router = express.Router();
const db = require('../controllers/productController');
router.get('/', db.getAll);
router.get('/:id', db.getById);
module.exports = router;
