import "./styles.css";
import Digitcard from "./digitcard/Digitcard";
import Header from "./header/Header";
import React from "react";
import InstructionDigitcard from "./digitcard/InstructionDigitcard";
function App() {

  const [cards, setCards] = React.useState([]);
  function changeCard(card){
      setCards(prevItems => [...prevItems, {card}]);
      console.log(cards)
  }
  // We map through the list of cards and upon matching the id of the required card,
  // we are now able to edit it and update its information
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
  // Similarly to editCard, we now filter the list of the cards based on their ID's
  const deleteCard = (cardID) => {
     setCards(cards.filter(item => item.card.cardID !== cardID));
   };

  console.log(cards)

  return (
    <div className="App">
      <div>
        <InstructionDigitcard  text="Welcome to DigitBiscuit!" title = "Create your sticky notes and drag them around!" bgColor="#FF9300" />
        <InstructionDigitcard text="Instructions" title = "To edit a card, simply double click on its text. I'm not editable!" bgColor="#00A2FF" />
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
