import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Checkout from './Pages/Checkout';
import Products from './Pages/Products';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/checkout">Checkout</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/shop" element={<Shop/>} />
      <Route path='/shop/:id' element={<Products/>}/>
      <Route path='/checkout' element={<Checkout/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    </>
  );
}

export default App;
