import Home from "./Home";
import ProductDetails from "./ProductDetails";
import ProductListing from "./ProductListing";
import Breadcrumbs from "./components/breadcrumbs";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <h1>Breadcrumbs</h1>
      <Router>
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}
