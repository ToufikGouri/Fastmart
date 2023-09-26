import './App.css';
import React from 'react';
import { Routes, Route, useNavigate, createSearchParams } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AllProducts } from './pages/allProducts';
import { Cart } from './pages/cart';
import { Product } from './pages/productDetails';
import { NotFound } from './pages/notFound';
import { useCart } from './context/cart';

function App() {

  const navigate = useNavigate();
  const { cartItemCount } = useCart();
  const onSearch = (searchQuery) => {
    navigate(`/?${createSearchParams({ q: searchQuery })}`)
  }

  return (
    <>
      <Navbar onSearch={onSearch} cartItemCount={cartItemCount()} />
      <Routes>
        <Route path='/' element={<AllProducts />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
