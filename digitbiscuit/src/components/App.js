import "./styles.css";
import Digitcard from "./digitcard/Digitcard";
import Header from "./header/Header";
import React from "react";
function App() {

  const [cards, setCards] = React.useState([]);

  function changeCard(card){
      setCards(prevItems => [...prevItems, {card}]);
      console.log(cards)
  }
  console.log(cards)

  return (
    <div className="App">
      <div>
        <Digitcard text="Creating a header for the Trello clone!" bgColor="#FF9300" />
        <Digitcard text="Not forgetting about writing a good explanation in each commit!" bgColor="#00A2FF" />
        {cards.map((card) => (
          <Digitcard key = {card.card} text = {card.card} bgColor ="#FF9300"/>
          ))}
      </div>
      <div>
        <Header changeCard = {changeCard}/>
      </div>
      
    </div>
  );
}

export default App;
