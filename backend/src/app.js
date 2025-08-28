const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(bodyParser.json());

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

app.get('/api/health', (req,res)=>res.json({status:'ok'}));

app.listen(PORT, ()=>console.log('Server running on',PORT));
module.exports = app;
