import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function CreateType ({show, onHide}) {
  return (
    <Modal
    show={show}
    onHide={onHide}
    size="lg"
    centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Дабавить тип
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
        <Form.Control
            required
            type="text"
            placeholder="Название типа"
           
          />
        </Form>
      
      </Modal.Body>
      <Modal.Footer>
      <Button  onClick={onHide} variant='outline-danger'>Закрыть</Button>
       <Button onClick={onHide} variant='outline-success'>добавить </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default CreateType