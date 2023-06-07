import "./Card.css";

const Cards = (props) => {
  return (
    <div className="outer">
      <div className="title">
        <div className="image">
          <img src={props.img} alt="Icon" />
        </div>
        <div className="inner">
          <div className="content">
            <h1>{props.name}</h1>
          </div>
        </div>
      </div>
      <h3>
        {props.designation.split("\\n").map((line) => (
          <p>{line}</p>
        ))}
      </h3>
    </div>
  );
};

export default Cards;
