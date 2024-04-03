import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { device } from '../../utils/ObjectStore';
import { useState } from 'react';
import {  Col, Row } from "react-bootstrap";

function CreateDevice ({show, onHide}) {
  const [info, setInfo] = useState([])


  const addInfo= ()=>{
    setInfo([...info, {title:'', description:' ', number:Date.now()}])
  } 
  const removeItem=(number)=>{
    setInfo(info.filter(item=>item.number !== number))
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
          Дабавить устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
        <Dropdown className = 'mt-3'>
      <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
       Выбрать тип
      </Dropdown.Toggle>
      <Dropdown.Menu>
       {device.types.map((type)=> <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>)}
      </Dropdown.Menu>
      </Dropdown>
      <Dropdown className = 'mt-3'>
      <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
       Выбрать бранд
      </Dropdown.Toggle>
      <Dropdown.Menu>
       {device.brands.map((brand)=> <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>)}
      </Dropdown.Menu>
      </Dropdown>
      <Form.Control 
      className= 'mt-3'
      placeholder = 'Введите название устройства'
      
      />
        <Form.Control 
      className= 'mt-3'
      placeholder = 'Введите стоймость устройства'
      type='number'
      />
        <Form.Control 
      className= 'mt-3'
      type='file'
      />
      <Button onClick={addInfo} className= 'mt-3' variant= 'outline-primary'>Добавить новое свойство</Button>
      {
        info.map((item)=>
        <Row className='mt-4' key= {item.number}>
          <Col md={4}>
          <Form.Control placeholder='Введите название свойства'/>
          </Col>
          <Col md={4}>
          <Form.Control placeholder='Введите название свойства'/>
          </Col>
          <Col md={4}>
           <Button onClick={()=> {removeItem(item.number)}} variant={'outline-danger'} >Удалить</Button>
          </Col>
          </Row>
          )
      }
        </Form>

      
      </Modal.Body>
      <Modal.Footer>
        <Button  onClick={onHide} variant='outline-danger'>Закрыть</Button>
        <Button onClick={onHide} variant='outline-success'>добавить </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default CreateDevice