import React from "react";
import "./Rules.css";

const EnglishRUles =
  "You are dealt 12 cards in the game. After opening one card, you have to find another card with a similar picture. Both cards are closed on a wrong attempt. During the game, you should try to remember the location of similar cards well, so that you need fewer attempts than your opponent to open all the cards. The loser is the one who needs more attempts to open all the cards, the loser performs the corresponding task that the game offers";

const GeorgianRUles =
  "თამაში გეძლევათ 12 ქარდი. ერთი ქარდის გახსნის შემდეგ უნდა იპოვოთ მეორე მსგავსი ნახატის მქონე ქარდი. არასწორ მცდელობაზე ორივე ქარდი იხურება. თამაშის განმავლობაში უნდა ეცადოთ რომ მსგავსი ქარდების ადგილმდებარეობა კარგად დაიმახსოვროთ, რომ ყველა ქარდის გასახსნელად მეტოქეზე ნაკლები ცდა დაგჭირდეთ. წაგებულია ის ვისაც მეტი ცდა დასჭირდება ყველა ქარდის გასახსნელად, წაგებული ასრულებს შესაბამის დავალებას რომელსაც თამაში შესთავაზებს";

export const Rules = ({ georgianLanguage, onClose }) => {
  return (
    <div className="blurRulesBackground">
      <div className="RulesContainer">
        <h1>{georgianLanguage ? "წესები" : "Rules"}</h1>
        <p>{georgianLanguage ? GeorgianRUles : EnglishRUles}</p>
        <button style={{ color: "black" }} onClick={onClose}>
          close
        </button>
      </div>
    </div>
  );
};
