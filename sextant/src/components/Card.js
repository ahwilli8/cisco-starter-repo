import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <h1 className="card_title">{props.title}</h1>
      <p className="card_info">Information that will be in the card.</p>
    </div>
  );
}

export default Card;
