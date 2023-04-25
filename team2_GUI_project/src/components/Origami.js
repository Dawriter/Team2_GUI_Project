

export default function Origami(props) {

  return (
	<div className="Origami">
		<h5>{props.model}</h5>
		<h5>${props.price}</h5>
		<p>Available: {props.quantity}</p>
		<button onClick={ () => props.clickFunc(props.id) }>Add to Cart</button>
	</div>
  )
}
