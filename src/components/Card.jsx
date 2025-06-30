import React from "react";
import style from "../components/Card.module.css";
import { cardItems } from "../utils/CardData";

const myName = "Emmanuel";

const Card = () => {
  return (
    <>
      <div>
        <div className="d-flex gap-5 border border-warning border-5 justify-content-between">
          <h1 className={style.heading}>I am {myName}</h1>
          <h1 className={style.heading}>I am {myName}</h1>
        </div>
        <div className={style.container}>
          {cardItems.map((card, index) => (
            <div key={index} className={style.card}>
            <img src={card.img} alt="" className={style.img} />
              <h1>{card.title}</h1>
              <p>{card.desc}</p>
              <i>{card.price}</i>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
