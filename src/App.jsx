import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import Admin from './Admin';
import Sidebar from './Sidebar'
import Stock from './Stock';
import Contact from './Contact';
import Earning from './Earning';
import Return from './Return';
import Review from './Review';
import Order from './Order';
import Product from './Product';
import Register from './Register';
import Home from './Home';
import About from'./About';
import Contactus from './Contactus';
import Logsin from './Logsin '
import Cart from './Cart'
import Products from './Products';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path='/contactus' element={<Contactus />} />
      <Route path="Logsin" element={<Logsin />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Register" element={<Register />} />
        <Route path="Login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/Sidebar" element={<Sidebar />} />
        <Route path="/Stock" element={<Stock />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/Earning' element={<Earning /> } />
        <Route path='/Review' element={<Review /> } />
        <Route path='/Return' element={<Return /> } />
        <Route path='/Order' element={<Order/> } />
        <Route path='/product' element={<Product/> } />
        <Route path='/products' element={<Products/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
