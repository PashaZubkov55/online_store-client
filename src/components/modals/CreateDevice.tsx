import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { device } from '../../utils/ObjectStore';
import { useState } from 'react';
import {  Col, Row } from "react-bootstrap";

function CreateDevice ({show, onHide}) {
  const [name, setnName] = useState('')
  const [price, setPrice] = useState(0)
  const [info, setInfo] = useState([])
  const [file, setFile] = useState(null)
  const [brand, setBrand] = useState(null)
  const [type, setType] = useState(null)


const selectFile = (e) =>{
console.log(e.target.files[0])
} 

  const addInfo= ()=>{
    setInfo([...info, {title:'', description:' ', number:Date.now()}])
  } 
  const removeItem=(number)=>{
    setInfo(info.filter(item=>item.number !== number))
  }

  const changeInfo= (key:never, value:never, number:never)=>{

      setInfo(info.map(item=>item.number === number?{...item, [key]:value}: item))
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
       {device.types.map((type)=> 
       <Dropdown.Item onClick={device.setSelectedType(type)} key={type.id}>{type.name}</Dropdown.Item>)}
      </Dropdown.Menu>
      </Dropdown>
      <Dropdown className = 'mt-3'>
      <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
       Выбрать бранд
      </Dropdown.Toggle>
      <Dropdown.Menu>
       {device.brands.map((brand)=> 
       <Dropdown.Item onClick={device.setSelectedBrand(brand)} key={brand.id}>{brand.name}</Dropdown.Item>)}
      </Dropdown.Menu>
      </Dropdown>
      <Form.Control 
       Value= {name}
       className= 'mt-3'
       placeholder = 'Введите название устройства'
       type='text'
       onChange= { e=>{setnName(e.target.value)}}
      />
        <Form.Control 
        Value= { price}
        className= 'mt-3'
        placeholder = 'Введите стоймость устройства'
        type='number'
        onChange= { e=>{setPrice(Number(e.target.value))}}
      />
        <Form.Control 
      className= 'mt-3'
      type='file'
      onChange= {selectFile}
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