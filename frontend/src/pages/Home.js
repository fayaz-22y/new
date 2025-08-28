import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="card" style={{textAlign:'center'}}>
      <h2>Step into Comfort & Style</h2>
      <p>Explore the latest from Flozz — crafted for performance, styled for life.</p>
      <Link to="/products" className="btn primary">Shop Now</Link>
    </section>
  );
}
