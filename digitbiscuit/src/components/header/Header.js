import { Button, TextField } from '@material-ui/core';
import React from 'react';
import Container from '@material-ui/core/Container';
import { FormControl, FormLabel } from '@material-ui/core';
import { RadioGroup } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { Radio } from '@material-ui/core';

import styled from "styled-components";
import { FaCookieBite } from 'react-icons/fa';
const Logo = styled.a`
padding: 1rem 0;
color: #19bfb1;
text-decoration: none;
font-weight: 700;
font-size: 1.7rem;`


const Header = (props) => {

    const [text, setText] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [color, setColor] = React.useState("#FF9300");
    
    function changeText(event){
        setText(event.target.value)
    }
    function changeTitle(event){
        setTitle(event.target.value)
    }


    function createCard(){
        const card = {text : text, title : title, bgColor : color, cardID: Math. floor(Math. random() * 100)}
        // props.changeCard(text, title)
        props.changeCard(card)
    }

    return (
        <Container sx={{ py: 10 }} maxWidth="lg" style={
            {backgroundColor: "#75fab5", width: "300px", height: "400px"}}>
        
        <p style = {{marginBottom : "20px"}}
        className={"page-header"}><Logo><FaCookieBite/>Digit<span>biscuit</span></Logo></p>  
        <Button onClick={createCard} variant="contained">Create card</Button>
        &nbsp;&nbsp;<br/>
        <TextField  id="outlined-basic" label="Title" onChange={changeText}></TextField>
        &nbsp;&nbsp;
        <TextField  multiline
          rows={4} id="filled-multiline-flexible" label="Content" onChange={changeTitle}></TextField>
        &nbsp;&nbsp;
        <br/>
        <br/>
        <br/>
        <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">Card Color</FormLabel>
            <RadioGroup value = {color} onChange = {(e) => setColor(e.target.value)}>
            <FormControlLabel value="#FF9300" control={<Radio />} label="Orange" />
            <FormControlLabel value="#00A2FF" control={<Radio />} label="Blue" />
        </RadioGroup>
        </FormControl>
        
        
        </Container>
    );
  };

  export default Header;