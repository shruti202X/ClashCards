import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export default function ModalNewCard(props) {
  return (
    <Modal {...props} centered>
      <Modal.Header closeButton>
        <Modal.Title>Create a New Subject</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Enter subject</Form.Label>
            <Form.Control type="text" placeholder="Mathematics" autoFocus />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={props.onHide}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
