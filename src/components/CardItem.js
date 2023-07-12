import React from "react";
import classes from "./CardItem.module.css";

export const CardItem = ({ finalCards }) => {
  return (
    <div className={classes.cardGrid}>
      {finalCards.map((card) => (
        <div className="card" key={card.id}>
          <div>
            <img className="front" src={card.src} alt="card front" />
            <img className="back" src="/img/cover.png" alt="card back " />
          </div>
        </div>
      ))}
    </div>
  );
};
