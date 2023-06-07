import "./Card.css";

const Cards = (props) => {
  return (
    <div className="outer">
      <div className="image" style={{ width: "100%", borderRadius: "0" }}>
        <img src={props.img} alt="Icon" />
      </div>
      <br></br>
      <div className="title">
        <div className="inner">
          <div className="content">
            <h1 style={{ margin: "auto" }}>{props.name}</h1>
          </div>
        </div>
      </div>
      <h3>Name: {props.description}</h3>
      <h3>Price: {props.price}</h3>
      <h3>Location: {props.address}</h3>
    </div>
  );
};

export default Cards;
