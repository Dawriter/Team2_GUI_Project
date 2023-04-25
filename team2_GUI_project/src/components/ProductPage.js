import Origami from "./Origami.js"
import origamiList from "../data/origami.json"  
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col } from 'react-bootstrap';
import {React, useState} from 'react';

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

  const [flowers, setFlowers] = useState(flowerList);

  const tryAddFlowerToCart = (idToAdd) => {
	const flowerToAdd = flowers.filter(
		(flower) => {return flower.id === idToAdd}
	)

	// Maps idToAdd to its index in flowers. Maybe inefficient but works.
	for (var i = 0; i < flowers.length; i++)
	{
		if (flowers[i].id === idToAdd)
			break;
	}
	
	if (flowers[i].quantity > 0)
	{
		flowers[i].quantity -= 1;
		alert("Added " + flowers[i].model + " to cart!");
	}
	else
	{
		alert("Out of stock!");
	}

	// Needed so that the state will recognize that it needs to rerender.
	// If I just pass flowers again, it will not rerender.
	let newFlowers = [...flowers];
	setFlowers(newFlowers);
  }

  const [miscs, setMiscs] = useState(miscList);

  const tryAddMiscToCart = (idToAdd) => {
	const miscToAdd = miscs.filter(
		(misc) => {return misc.id === idToAdd}
	)

	// Maps idToAdd to its index in flowers. Maybe inefficient but works.
	for (var i = 0; i < miscs.length; i++)
	{
		if (miscs[i].id === idToAdd)
			break;
	}
	
	if (miscs[i].quantity > 0)
	{
		miscs[i].quantity -= 1;
		alert("Added " + miscs[i].model + " to cart!");
	}
	else
	{
		alert("Out of stock!");
	}

	// Needed so that the state will recognize that it needs to rerender.
	// If I just pass flowers again, it will not rerender.
	let newMiscs = [...miscs];
	setMiscs(newMiscs);
  }

  return (

    <div className="ProductPage">
	<h1>Products</h1>
	<h2>Flowers</h2>
	<Row lg='d-grid gap-3'>
    {
		flowers.map((origami) => (
		<Col md="11" lg="3" className="mx-auto p-2 border bg-secondary rounded border-4 border-dark">
		<img width="150px" height="150px" src={require('../data/images/' + origami.image + ".png")} alt={origami.image}></img>
		<Origami model={origami.model} price={origami.price} quantity={origami.quantity} key={origami.id}
		clickFunc={tryAddFlowerToCart} id={origami.id}/>
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
		<Origami model={origami.model} price={origami.price} quantity={origami.quantity} key={origami.id}
		clickFunc={tryAddMiscToCart} id={origami.id}/>
		</Col>
		))
	}
	</Row>

  </div>

  )
}
