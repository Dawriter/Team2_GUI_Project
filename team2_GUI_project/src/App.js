import './App.css';
import Origami from "./components/Origami.js"
import origamiList from "./data/origami.json"


function App() {
  return (

    <div className="App">
    {
			origamiList.map(origami => (
			<Origami model={origami.model} price={origami.price} image={origami.image}
			quantity={origami.quantity}/>
		))
  		}
  </div>

  )
}

export default App;