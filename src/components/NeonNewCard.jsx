import { useState } from "react";
import Card from "react-bootstrap/Card";
import ModalNewCard from "./ModalNewCard";
import "./NeonCard.css";

export default function NeonCard() {
  const [modalShow, setModalShow] = useState(false);

  const playSound = () => {
    const sound = new Audio("../../public/audio/card_click.mp3");
    sound.play();
    setModalShow(true);
  };

  return (
    <>
      <Card className="plus-card-style" onClick={playSound}></Card>
      <ModalNewCard show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
