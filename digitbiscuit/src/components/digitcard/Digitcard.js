import { Card, Button, Typography } from "@material-ui/core";
import Draggable from "react-draggable";
import { Container } from "@material-ui/core";

const Digitcard = ({ text, bgColor,title, onDelete }) => {


    return (
    <Container sx={{ py: 1 }} maxWidth="md">
      <Draggable>
        <Card
          style={{ width: "300px", backgroundColor: bgColor, height : "100px", color: "#ffffff"}}
        >
          <Button onClick = {onDelete} variant="text">Delete</Button>
          <Typography variant="h6">{text}</Typography>
          <Typography variant="h9">{title}</Typography> 
        </Card>
      </Draggable>
      </Container>
    );
  };

  export default Digitcard;