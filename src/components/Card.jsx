import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div>
      <button onClick={() => props.onClose(props.id)}>X</button>
      <Link to={`detail/${props.id}`}>
        <h3>{props.name}</h3>
      </Link>
      <h4>Status: {props.status}</h4>
      <h4>Specie: {props.specie}</h4>
      <h4>Gender: {props.gender}</h4>
      <h4>Origin: {props.origin}</h4>
      <img src={props.image} alt={props.name} />
    </div>
  );
}
