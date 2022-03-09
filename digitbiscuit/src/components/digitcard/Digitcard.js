import { Card, Button, Typography } from "@material-ui/core";
import Draggable from "react-draggable";

const Digitcard = ({ text, bgColor }) => {
    return (
      <Draggable>
        <Card
          style={{ width: "20%", backgroundColor: bgColor, color: "#ffffff", height: "300%" }}
        >
          <Button variant="text">Edit</Button>
          <Typography variant="h6">{text}</Typography>
        </Card>
      </Draggable>
    );
  };

  export default Digitcard;