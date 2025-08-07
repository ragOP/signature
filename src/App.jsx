import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import './App.css'
import OrderConfirmation from './pages/OrderConfirmation';
import Record from './pages/Record';
import LoveSection from './pages/LoveSection';
import NewLove from './pages/NewLove';
import LoveCart from './pages/LoveCart';
import LoveRecord from './pages/LoveRecord';
import LoveOrderConfirmation from './pages/LoveOrderConfirmation';
import Signature from './pages/Signature';
import SignatureCart from './pages/SignatureCart';
import SignatureRecord from './pages/SignatureRecord';
import SignatureOrderConfirmation from './pages/SignatureOrderConfirmation';


// Main App Component
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Signature />} />
          <Route path="/signature" element={<Signature />} />
          {/* <Route path="/consultation" element={<Home />} />     
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart-2" element={<LoveCart />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/order-confirmation-2" element={<LoveOrderConfirmation />} />
          <Route path="/record" element={<Record />} />
          <Route path="/love-record" element={<LoveRecord />} /> */}
          {/* <Route path="/love" element={<LoveSection />} /> */}
          {/* <Route path="/love" element={<NewLove />} /> */}
          {/* <Route path="/signature" element={<Signature />} /> */}
          <Route path="/signature-cart" element={<SignatureCart />} />
          <Route path="/signature-record" element={<SignatureRecord />} />
          <Route path="/signature-order-confirmation" element={<SignatureOrderConfirmation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
