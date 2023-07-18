import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Checkout from './Pages/Checkout';
import Products from './Pages/Products';
import NotFound from './Pages/NotFound';
import { ShoppingCartProvider } from './Context/ShoppingCartContext';
import Navbar from './Components/Navbar';

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shop" element={<Shop/>} />
        <Route path='/shop/:id' element={<Products/>}/>
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </ShoppingCartProvider>
  );
}

export default App;
