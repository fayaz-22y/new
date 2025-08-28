import React from 'react';
import { Link } from 'react-router-dom';
const Home = ()=>(
  <main className="container" style={{marginTop:80}}>
    <section style={{padding:'2rem 0',textAlign:'center'}}>
      <h1>Flozz — Premium Shoes</h1>
      <p>Comfort • Style • Durability</p>
      <Link to="/products" style={{display:'inline-block',marginTop:12,padding:'0.6rem 1rem',background:'#3498db',color:'#fff',borderRadius:6}}>Shop Now</Link>
    </section>
  </main>
);
export default Home;
