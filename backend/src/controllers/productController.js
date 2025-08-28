const pool = require('../config/database');
exports.getAll = async (req,res)=>{
  try{
    const [rows] = await pool.query('SELECT id, name, description, price, image_url FROM products');
    res.json(rows);
  }catch(err){ console.error(err); res.status(500).json({error:'db error'})}
};
exports.getById = async (req,res)=>{
  try{
    const [rows] = await pool.query('SELECT id, name, description, price, image_url FROM products WHERE id=?',[req.params.id]);
    if(rows.length===0) return res.status(404).json({error:'not found'});
    res.json(rows[0]);
  }catch(err){ console.error(err); res.status(500).json({error:'db error'})}
};
