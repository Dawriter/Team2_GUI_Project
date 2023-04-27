import './App.css';
import ProductPage from "./components/ProductPage.js"
//import ShoppingCart from "./components/shoppingcart.js"
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import StoreNavBar from './components/StoreNavBar';
import ShoppingCart from './components/shoppingcart';


function App() {

  return (
    // this whole thing within the div should be wrapped in a router.
    // there should be a navbar at the top of the screen to swap between pages.
  <div className="App">
    <Container>
      <Router>
        <StoreNavBar />
        <Routes>
          <Route path="/" element = {<ProductPage />} />
           <Route path="/checkout" element = {<ShoppingCart />} />
        </Routes>
      </Router>
    </Container>
  </div>

  )
}

export default App;