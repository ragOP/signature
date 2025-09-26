import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import "./App.css";
import OrderConfirmation from "./pages/OrderConfirmation";
import Record from "./pages/Record";
import LoveSection from "./pages/LoveSection";
import NewLove from "./pages/NewLove";
import LoveCart from "./pages/LoveCart";
import LoveRecord from "./pages/LoveRecord";
import LoveOrderConfirmation from "./pages/LoveOrderConfirmation";
import Signature from "./pages/Signature";
import SignatureCart from "./pages/SignatureCart";
import SignatureRecord from "./pages/SignatureRecord";
import SignatureOrderConfirmation from "./pages/SignatureOrderConfirmation";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import SignatureAbondentReport from "./pages/AbondedentReport";

import SignatureRag from "./pages/SignatureRag";
import SignatureCartRag from "./pages/SignatureCartRag";
// import SignatureRecordRag from "./pages/SignatureRecordRag";
import V2 from "./pages/V2";
import SignatureOrderConfirmationRag from "./pages/SignatureOrderConfirmationRag";
// import SignatureAbondentReportRag from "./pages/AbondedentResportRag";
import SignatureNewRedesigned from "./components/signature-new/SignatureNew";
import SignatureNewCart from "./components/signature-new-cart/SignatureNewCart";
import SignatureNew from "./pages/new/SignatureNew";
import NewCart from "./pages/new/NewCart";
import SignatureCartCashFree from "./pages/SignatureCartCashFree";
import SignatureOrderConfirmationCashfree from "./pages/SignatureOrderConfirmationCashFree";
import SignatureNewAbondentReport from "./pages/new/SignatureNewAbondentReport";
import SignatureNewRecord from "./pages/new/SignatureNewRecord";
import SignatureNewOrderConfirmationPage from "./pages/new/SignatureNewOrderConfirmationPage";

// Main App Component
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<SignatureRag />} /> */}
          <Route path="/rag" element={<SignatureRag />} />
          <Route path="/new" element={<SignatureNew />} />
          <Route path="/new-cart" element={<NewCart />} />
          <Route path="/signature-cart-rag" element={<SignatureCartRag />} />
          <Route path="/v2" element={<V2 />} />
          {/* <Route
            path="/signature-record/rag"
            element={<SignatureRecordRag />}
          /> */}
          <Route
            path="/signature-order-confirmation/rag"
            element={<SignatureOrderConfirmationRag />}
          />
          {/* <Route
            path="/abondent-report/rag"
            element={<SignatureAbondentReportRag />}
          /> */}

          <Route path="/" element={<Signature />} />
          <Route path="/signature" element={<Signature />} />
          <Route path="/signature-new" element={<SignatureNewRedesigned />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/signature-cart" element={<SignatureCart />} />
          <Route path="/signature-cart-cashfree" element={<SignatureCartCashFree />} />

          <Route path="/signature-new-cart" element={<SignatureNewCart />} />

          <Route path="/signature-record" element={<SignatureRecord />} />
          <Route
            path="/signature-new-record"
            element={<SignatureNewRecord />}
          />

          <Route
            path="/signature-order-confirmation"
            element={<SignatureOrderConfirmation />}
          />

            <Route
              path="/signature-order-confirmation-cashfree"
              element={<SignatureOrderConfirmationCashfree />}
            />
          
          <Route
            path="/signature-new-order-confirmation"
            element={<SignatureNewOrderConfirmationPage />}
          />
          <Route path="/privacy" element={<Privacy />} />

          <Route
            path="/abondent-report"
            element={<SignatureAbondentReport />}
          />
          <Route
            path="/signature-new-abondent-report"
            element={<SignatureNewAbondentReport />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
