
import './App.css';
import Product from './Product';
import PricingPanel from './PricingPanel';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <>
      
      

      <Router>
      <Routes> 
        <Route path="/green-ecommerce-page/" element={<Product/>}  />
        <Route path="/pricing-panel" element={<PricingPanel/>}  />
      </Routes>
    </Router>
    </>
  )
}

export default App
