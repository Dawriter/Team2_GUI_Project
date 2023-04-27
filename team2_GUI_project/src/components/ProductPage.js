import Origami from "./Origami.js"
import origamiList from "../data/origami.json"  
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col } from 'react-bootstrap';
import {React, useState} from 'react';

export default function ProductPage() {

	var cart = []; // Local version of the shopping cart. Used for adding to it when button is clicked.

	if (localStorage.getItem("shoppingCart") != null)
	{
		cart = JSON.parse(localStorage.getItem("shoppingCart"));
	}

	console.log(cart); // debug

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

  const addObjectToLocalStorage = (origami) => {
	var unique = true;
	var index;

	// search cart for duplicate items.
	for (index = 0; index < cart.length; index++) {
		if (origami.id === cart[index].id)
		{ // If selected item is already in the cart, increase its quantity by 1 instead of adding it again.
			unique = false;
			cart[index].quantity++;
			console.log(index, cart[index].quantity);
			break;
		}
	}

	if (unique)
	{
		index = cart.push(origami);
		localStorage.setItem("shoppingCart", JSON.stringify(cart));
		// stupid thing to make sure it only sets the quantity of the cart, and not the original product.
		// If you wanna know why, google "pass by reference". Lol.
		cart = JSON.parse(localStorage.getItem("shoppingCart"));
		cart[index - 1].quantity = 1;
	}
	
		localStorage.setItem("shoppingCart", JSON.stringify(cart));
  }

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
		addObjectToLocalStorage(flowerToAdd[0]);
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
		addObjectToLocalStorage(miscToAdd[0]);
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
