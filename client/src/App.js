import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getProducts } from './functions/requests'
import Home from './pages/Home';
import Products from './pages/Products';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';


function App() {
  const [products, setProducts] = useState(0)

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res.products)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/products" element={ <Products products={ products }/> } />
          <Route exact path="/register" element={ <Register /> } />
          <Route exact path="/login" element={ <Login /> } />
          <Route exact path="/dashboard" element={ <Dashboard /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
