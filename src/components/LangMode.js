import React from "react";
import "./LangMode.css";
import image from "../flags/download.png";
import united from "../flags/flag-of-united-kingdom-illustration-free-vector.jpg";

export const LangMode = ({ content, setGeorgianLanguage }) => {
  return (
    <>
      <div className="flagsCont">
        <div className="flags">
          <img
            src={image}
            alt="Georgian Flag"
            onClick={() => {
              setGeorgianLanguage(true);
            }}
          />
        </div>
        <h1>{content}</h1>
        <div className="flags">
          <img
            src={united}
            alt="United Kingdom Flag"
            onClick={() => {
              setGeorgianLanguage(false);
            }}
          />
        </div>
      </div>
    </>
  );
};
