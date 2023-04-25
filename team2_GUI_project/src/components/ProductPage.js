import Origami from "./Origami.js"
import origamiList from "../data/origami.json"  
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col } from 'react-bootstrap';
// import useState from 'react';

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
	<h1>Products</h1>
	<h2>Flowers</h2>
	<Row lg='d-grid gap-3'>
    {
			flowerList.map(origami => (
			<Col md="11" lg="3" className="mx-auto p-2 border bg-secondary rounded border-4 border-dark">
			<img width="150px" height="150px" src={require('../data/images/' + origami.image + ".png")} alt={origami.image}></img>
			<Origami model={origami.model} price={origami.price} quantity={origami.quantity}/>
			</Col>
		))
	}
	</Row>
	<hr />
	<h2>Other Objects</h2>
	<Row lg='d-grid gap-3'>
	{
		miscList.map(origami => (
		<Col md="11" lg="3" className="mx-auto p-2 border bg-secondary rounded border-4 border-dark">
		<img width="150px" height="150px" src={require('../data/images/' + origami.image + ".png")} alt={origami.image}></img>
		<Origami model={origami.model} price={origami.price} quantity={origami.quantity}/>
		</Col>
	))
	}
	</Row>

  </div>

  )
}
