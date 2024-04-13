import { Link, useNavigate } from "react-router-dom";
import "./card.scss";

function Card({ item }) {
  const navigate = useNavigate()
  return (
    <div className="card" onClick={()=>navigate(`/${item.id}`)}>
      <span className="imageContainer">
        <img src={item.images[0]} alt="" onClick={()=>navigate(`/${item.id}`)}/>
      </span>
      <div className="textContainer" onClick={()=>navigate(`/${item.id}`)}>
        <h2 className="title">
          <span >{item.title}</span>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">₹ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;