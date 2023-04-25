import Origami from "./Origami.js"
import origamiList from "../data/origami.json"

export default function ProductPage() {

  const miscList = origamiList.filter(
    (origami) => {
      return origami.category === "Misc.";
    }
  )

  const flowerList = origamiList.filter(
    (origami) => {
      return origami.category === "Flower";
    }
  )

  return (

    <div className="ProductPage">
    {
			miscList.map(origami => (
			<Origami model={origami.model} price={origami.price} image={origami.image}
			quantity={origami.quantity}/>
		))
  		}

      <hr />
    {
			flowerList.map(origami => (
			<Origami model={origami.model} price={origami.price} image={origami.image}
			quantity={origami.quantity}/>
		))
  		}
  </div>

  )
}
