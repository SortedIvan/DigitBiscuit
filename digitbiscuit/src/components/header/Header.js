import { Button, TextField } from '@material-ui/core';
import React from 'react';
import Container from '@material-ui/core/Container';
import { FormControl, FormLabel } from '@material-ui/core';
import { RadioGroup } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { Radio } from '@material-ui/core';

const Header = (props) => {

    const [text, setText] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [color, setColor] = React.useState("");

    function ChangeColor(event){
        setColor(event.target.color);
    }

    function changeText(event){
        setText(event.target.value)
    }
    function changeTitle(event){
        setTitle(event.target.value)
    }

    function createCard(){
        const card = {text : text, title : title, bgColor : color}
        // props.changeCard(text, title)
        props.changeCard(card)
    }

    return (
        <Container sx={{ py: 10 }} maxWidth="lg" style={{backgroundColor: "#75fab5"}}>
        <div>
        <Button onClick={createCard}>Create card</Button>
        <TextField id="outlined-basic" label="Title" onChange={changeText}></TextField>
        <TextField id="outlined-basic" label="Content" onChange={changeTitle}></TextField>
        <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">Card Color</FormLabel>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={color ? color: ""}
                onChange={ChangeColor}
            >
            <FormControlLabel value="#FF9300" control={<Radio />} label="Blue" />
            <FormControlLabel value="#00A2FF" control={<Radio />} label="Orange" />
        </RadioGroup>
        </FormControl>
        </div>
        </Container>
    );
  };

  export default Header;