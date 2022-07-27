import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import { getProducts } from './functions/requests'


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
          <Route exact path="/products" element={ <Products products={ products }/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
