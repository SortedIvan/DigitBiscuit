import { Card, Button, Typography } from "@material-ui/core";
import Draggable from "react-draggable";
import { Container } from "@material-ui/core";

const Digitcard = ({ text, bgColor }) => {


    return (
    <Container sx={{ py: 1 }} maxWidth="md">
      <Draggable>
        <Card
          style={{ width: "300px", backgroundColor: bgColor, height : "100px", color: "#ffffff"}}
        >
          <Button variant="text">Delete</Button>
          <Typography variant="h6">{text}</Typography>
        </Card>
      </Draggable>
      </Container>
    );
  };

  export default Digitcard;