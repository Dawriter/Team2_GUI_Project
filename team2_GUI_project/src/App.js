import './App.css';
import ProductPage from "./components/ProductPage.js"
//import ShoppingCart from "./components/shoppingcart.js"


function App() {

  return (
    // this whole thing within the div should be wrapped in a router.
    // there should be a navbar at the top of the screen to swap between pages.
    <div className="App">
    
    <ProductPage />
  </div>

  )
}

export default App;