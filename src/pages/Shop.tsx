import { Col, Container, Row } from "react-bootstrap"
import { TypeBar } from "../components/TypeBar"

export const Shop =  () =>{
    return(
       <Container className='pt-3'>
        <Row>
            <Col md={3}>
                <TypeBar/>
            </Col>
            <Col md={9}></Col>



        </Row>
       
       </Container>
    )
}