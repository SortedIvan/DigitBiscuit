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

  function deleteCard(id){
    const newCards = [...cards];
    const index = newCards.indexOf(id);
    newCards.splice(index, 1);
    setCards(newCards);
}

  console.log(cards)

  return (
    <div className="App">
      <div>
        <Digitcard text="Creating a header for the Trello clone!" title = "RANDOM TITLE" bgColor="#FF9300" />
        <Digitcard text="Not forgetting about writing a good explanation in each commit!" title = "ANOTHER RANDOM TITLE" bgColor="#00A2FF" />
        {cards.map((card) => (
          <Digitcard onDelete = {deleteCard} key = {card.card.title} text = {card.card.text} title = {card.card.title}bgColor ="#FF9300"/>
          ))}
      </div>
      <div>
        <Header changeCard = {changeCard}/>
      </div>
      
    </div>
  );
}

export default App;
