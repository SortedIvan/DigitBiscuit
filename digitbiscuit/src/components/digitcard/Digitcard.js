import { Card, Button, Typography } from "@material-ui/core";
import Draggable from "react-draggable";
import { Container } from "@material-ui/core";
import React from "react";
import { TextField } from "@material-ui/core";

const Digitcard = (props) => {
    // We have 3 useStates, editing text, editing the title
    // and one that enables the editing menu
    const [editText, setEditText] = React.useState("");
    const [editTitle, setEditTitle] = React.useState("");
    const [canBeEdit, setCanBeEdit] = React.useState(false);
    React.useEffect(() => {
      setCanBeEdit(false)
    }, []);
    function editEnable(){
    setCanBeEdit(true)
    }

    function editTextValue(e){
      setEditText(e.target.value)
    }
    function editTitleValue(e){
      setEditTitle(e.target.value)
    }

    // Upon confirmation of editing, the new card's parameters are passed on as props
    function onConfirmEditCard(){
      const card = {
        cardID: props.cardID,
        text: editText,
        title: editTitle
      };
      console.log(props.cardID + "CARD ID ON CONFRIM CARD")
      console.log(card)
      props.editCard(card)
      setCanBeEdit(false)
    }
  
    return (
    <Container sx={{ py: 1 }} maxWidth="md">
      <Draggable>
        <Card
          style={{ width: "300px", backgroundColor: props.bgColor, height : "200px", color: "#ffffff",
          display: "flex", justifyContent: "top", flexDirection: "column", 
          }}
        >
          <Button onClick = {props.deleteFun} variant="text">Delete</Button>
          <span></span>
                  {
            canBeEdit == true
            ?<>
              <Button onClick = {onConfirmEditCard}>Confirm</Button>
              <TextField onChange = {editTitleValue} id="outlined-basic" label="Title" >{props.text}</TextField>
              <TextField onChange = {editTextValue} id="outlined-basic" label="Text" >{props.title}</TextField>
            </>
            :
            <>
              <Typography style = {{  color: 'White',
                      fontSize: 22,
                      fontWeight: 'bold',
                      fontFamily: 'Trebuchet MS',}} 
                      variant="h9">{props.text}</Typography> 
              <div  style = {{  color: 'white',
                      fontSize: 18,
                      fontFamily: 'Trebuchet MS',}}
                      onDoubleClick={editEnable}>{props.title}</div>
            </>
          }
        </Card>
      </Draggable>
      </Container>
    );
  };

  export default Digitcard;