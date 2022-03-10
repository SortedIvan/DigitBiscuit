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

  function editCard(card) {
    const updatedCards = [...cards].map((item) => {
      if (item.card.cardID === card.cardID) {
        item.card.text = card.text;
        item.card.title = card.title;
      }
      return item;
    });
    setCards(updatedCards);
  }

  const deleteCard = (cardID) => {
     setCards(cards.filter(item => item.card.cardID !== cardID));
   };

  console.log(cards)

  return (
    <div className="App">
      <div>
        <Digitcard  text="Random title" title = "Creating a header for the Trello clone!" bgColor="#FF9300" />
        <Digitcard text="Another random title" title = "Not forgetting about writing a good explanation in each commit!" bgColor="#00A2FF" />
        {cards.map((card) => (
          <Digitcard cardID = {card.card.cardID} editCard = {editCard}deleteFun = {() => deleteCard(card.card.cardID)} key = {card.card.title} text = {card.card.text} title = {card.card.title}bgColor ={card.card.bgColor}/>
          ))}
      </div>
      <div>
        <Header changeCard = {changeCard}/>
      </div>
      
    </div>
  );
}

export default App;
