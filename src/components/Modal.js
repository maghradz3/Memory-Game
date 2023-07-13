import React from "react";
import "./Modal.css";
import { useState } from "react";

const LoserWishes = [
  "Sing a silly song in public.",
  "Do a dance routine in a crowded area.",
  "Wear a ridiculous outfit for a day.",
  "Perform a dare or challenge of the winner's choosing.",
  "Give the winner a foot massage or back rub.",
  "Prepare and serve a meal for the winner.",
  "Do all of the winner's household chores for a day.",
  "Be the winner's personal servant for a specified period of time.",
  "Create a piece of artwork or write a poem for the winner.",
  "Perform a comedy skit or stand-up routine.",
];

export const Modal = ({ finalResult, onClose }) => {
  const generateRandomIndex = Math.floor(Math.random() * LoserWishes.length);
  console.log(generateRandomIndex);

  const generatedWish = LoserWishes[generateRandomIndex];

  return (
    <>
      <div className="blurBackground">
        <div className="ResultContainer">
          <h1>Loser is - {finalResult}</h1>
          <p style={{ color: "black" }}>{generatedWish}</p>

          <button style={{ color: "black" }} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </>
  );
};
