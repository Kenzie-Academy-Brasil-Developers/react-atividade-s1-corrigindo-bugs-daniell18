import { useState } from "react";
import Card from "../card";
import "./style.css";

const CardsList = ({ cardsList }) => {
  const [suitFilter, setSuitFilter] = useState(false);

  const handleSuitFilter = (e) => {
    if (e.target.id === suitFilter) {
      setSuitFilter(true);
    } else {
      setSuitFilter(e.target.id);
    }
  };

  return (
    <div>
      <div className="filter-container">
        <p>Filtrar por naipe</p>
        <div>
          <input
            onClick={handleSuitFilter}
            type="checkbox"
            id="SPADES"
            name="suit"
          />
          <label for="SPADES">Espadas</label>

          <input
            onClick={handleSuitFilter}
            type="checkbox"
            id="HEARTS"
            name="suit"
          />
          <label for="HEARTS">Copas</label>

          <input
            onClick={handleSuitFilter}
            type="checkbox"
            id="CLUBS"
            name="suit"
          />
          <label for="CLUBS">Paus</label>

          <input
            onClick={handleSuitFilter}
            type="checkbox"
            id="DIAMONDS"
            name="suit"
          />
          <label for="DIAMONDS">Ouros</label>
        </div>
      </div>
      <div className="cards">
        {!suitFilter &&
          cardsList.map((actual, index) => {
            return <Card card={actual} key={index} />;
          })}

        {suitFilter &&
          cardsList
            .filter((actual) => actual.suit === suitFilter)
            .map((actual, index) => <Card card={actual} key={index} />)}
      </div>
    </div>
  );
};
export default CardsList;
