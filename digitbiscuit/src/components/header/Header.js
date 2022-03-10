import { Button, TextField } from '@material-ui/core';
import React from 'react';


const Header = (props) => {

    const [text, setText] = React.useState("");

    function changeText(event){
        setText(event.target.value)
    }

    function createCard(){
        props.changeCard(text)
    }

    return (
        <div>
        <Button onClick={createCard}>Create card</Button>
        <TextField onChange={changeText}></TextField>
        </div>
    );
  };

  export default Header;