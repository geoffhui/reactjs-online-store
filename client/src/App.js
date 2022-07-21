import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/products" element={ <Products /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
