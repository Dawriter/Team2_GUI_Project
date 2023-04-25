

export default function Origami(props) {

  return (
	<div className="Origami">
		<img src={props.image} alt=""></img>
		<h5>{props.model}</h5>
		<h6>${props.price}</h6>
		<p>Available: {props.quantity}</p>
	</div>
  )
}
