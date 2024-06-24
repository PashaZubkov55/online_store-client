import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { createType } from '../../http/deviceAPI';

function CreateType ({show, onHide}) {
  const [value,setValue] = useState('')
 const  addType = ()=>{
  createType({name:value}).then(data=>{
    setValue('')
    onHide()
    console.log(data)
  })
 
 }

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
          value ={value}
            required
            onChange = {e=>setValue(e.target.value)}
            type="text"
            placeholder="Название типа"

           
          />
        </Form>
      
      </Modal.Body>
      <Modal.Footer>
      <Button  onClick={onHide} variant='outline-danger'>Закрыть</Button>
       <Button onClick={addType} variant='outline-success'>добавить </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default CreateType