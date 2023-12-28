import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./NeonCard.css";

export default function NeonCard() {
  const playSound = () => {
    const sound = new Audio("../../public/audio/card_click.mp3");
    sound.play();
  };

  return (
    <Card className="card-style" onClick={playSound}>
      <Card.Title className="text-center">Leetcode</Card.Title>
      <ListGroup variant="flush">
        <ListGroup.Item className="flex-row points">
          <div>Points</div>
          <div>20 / 40</div>
        </ListGroup.Item>
        <ListGroup.Item className="flex-row percentage">
          <div>Percentage</div>
          <div>50</div>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}
