import React from "react";
import classes from "./CardItem.module.css";

export const CardItem = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    // <div className={classes.cardGrid}>
    <div className={classes.card} key={card.id}>
      <div className={flipped ? classes.flipped : ""}>
        <img className={classes.front} src={card.src} alt="card front" />
        <img
          className={classes.back}
          src="/img/cover.png"
          alt="card back "
          onClick={handleClick}
        />
      </div>
    </div>
    // </div>
  );
};
