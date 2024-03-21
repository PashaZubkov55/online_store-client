import { Col, Card, Container, Image, Row, Button } from "react-bootstrap"
import { Idevices } from "../utils/interface"
import Star1 from '../assets/img/Star1.png'

 const DevicePage =  () =>{
    const device:Idevices =  {
        id:1,
        name:'9c',
        price:10000,
        rating:5,
        img:'https://cdn1.ozone.ru/s3/multimedia-u/6379580718.jpg'
    }
    return(
        <Container className="mt-3">
           <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center text-center">
                        <h2>{device.name}</h2>
                        <div
                            className="rating__icon d-flex align-items-center justify-content-center "
                            style={{background: `url(${Star1}) no-repeat center center`, width:240, height: 240, backgroundSize: 'cover', fontSize:64}}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>От: {device.price} руб.</h3>
                        <Button variant={"outline-primary"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                
            </Row>
        </Container>
    )
}

export default DevicePage