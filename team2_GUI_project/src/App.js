import './App.css';
import ProductPage from "./components/ProductPage.js"
import CheckOut from "./components/checkout.js"
//import ShoppingCart from "./components/shoppingcart.js"
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import StoreNavBar from './components/StoreNavBar';
import ShoppingCart from './components/shoppingcart';
import Landing from './components/Landing';


function App() {

  return (
  <div className="App">
    <Container>
      <Router>
        <StoreNavBar />
        <p className='navbar_padding'>padding for navbar</p>
        <Routes>
          <Route path="/" element = {<Landing />} />
          <Route path="/products" element = {<ProductPage />} />
           <Route path="/cart" element = {<ShoppingCart />} />
           <Route path="/checkout" element = {<CheckOut />} />
        </Routes>
      </Router>
    </Container>
  </div>

  )
}

export default App;