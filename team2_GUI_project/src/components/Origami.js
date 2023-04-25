

export default function Origami(props) {

  return (
	<div className="Origami">
		<img src={props.image} alt=""></img>
		<h5>{props.model}</h5>
		<h5>${props.price}</h5>
		<p>Available: {props.quantity}</p>
		<button>Add to Cart</button>
	</div>
  )
}
