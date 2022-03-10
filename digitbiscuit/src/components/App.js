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
    // console.log("BELOW ME IS CARD")
    // console.log(card)
    // const newList = cards.map((item) => {
    //   if (item.card.cardID === card.cardID) {
    //     const updatedItem = {
    //       cardID: item.card.cardID,
    //       text: card.text,
    //       title: card.title,
    //       bgColor: item.card.bgColor
    //     };

    //     return updatedItem;
    //   }
    //   return item;
    // });
    // console.log("yes");
    // console.log(newList);
    // setCards(newList);
    const updatedCards = [...cards].map((item) => {
      if (item.card.cardID === card.cardID) {
        item.card.text = card.text;
        item.card.title = card.title;
      }
      return item;
    });
    setCards(updatedCards);
  }

  // function deleteCard(id){
  //   console.log(id)
  //   const newCards = [...cards];
  //   const index = newCards.indexOf(id);
  //   newCards.splice(index, 1);
  //   setCards(newCards);
  // }
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
          // <Digitcard onDelete = {() => deleteCard(card.card.cardID)} key = {card.card.title} text = {card.card.text} title = {card.card.title}bgColor ={card.card.bgColor}/>
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
