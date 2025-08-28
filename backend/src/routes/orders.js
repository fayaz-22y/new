const express = require('express');
const router = express.Router();
router.post('/', async (req,res)=>{
  // simple order endpoint — in real app persist orders
  console.log('New order', req.body);
  res.status(201).json({message:'order received'});
});
module.exports = router;
