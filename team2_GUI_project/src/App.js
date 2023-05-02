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
    // this whole thing within the div should be wrapped in a router.
    // there should be a navbar at the top of the screen to swap between pages.
  <div className="App">
    <Container>
      <Router>
        <StoreNavBar />
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