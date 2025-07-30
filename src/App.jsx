import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import './App.css'
import OrderConfirmation from './pages/OrderConfirmation';
import Record from './pages/Record';

// Main App Component
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consultation" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/record" element={<Record />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
