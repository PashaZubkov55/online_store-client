import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { createBrand } from '../../http/deviceAPI';

function CreateBrand ({show, onHide}) {
  const [value, setValue] = useState('')
  const addBrand = ()=>{
    createBrand({name:value}).then(data=>{
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
          Дабавить бренд
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
        <Form.Control
          value ={value}
            required
            onChange = {e=>setValue(e.target.value)}
            type="text"
            placeholder="Название Бренда"

           
          />
        
        </Form>
      
      </Modal.Body>
      <Modal.Footer>
      <Button  onClick={onHide} variant='outline-danger'>Закрыть</Button>
      <Button onClick={addBrand} variant='outline-success'>добавить </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateBrand