import Card from "react-bootstrap/Card";
import "./NeonCard.css";

export default function NeonCard() {
  const playSound = () => {
    const sound = new Audio("../../public/audio/card_click.mp3");
    sound.play();
  };

  return <Card className="plus-card-style" onClick={playSound}></Card>;
}
