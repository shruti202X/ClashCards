import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "./ModalNewCard.css";

export default function ModalNewCard(props) {
  return (
    <Modal {...props} centered contentClassName="neon-modal">
      <Modal.Header closeButton>
        <Modal.Title>Create a New Subject</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Enter subject</Form.Label>
            <Form.Control type="text" placeholder="Mathematics" autoFocus />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="footer">
        <Button className="btn close" onClick={props.onHide}>
          Close
        </Button>
        <Button className="btn save" onClick={props.onHide}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
