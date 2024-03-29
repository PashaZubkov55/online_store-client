import { Col, Container, Row } from "react-bootstrap"
import { TypeBar } from "../components/TypeBar"
import { BrandBar } from "../components/BrandBar"
import { DeviceList } from "../components/DeviceList"

export const Shop =  () =>{
    return(
       <Container className='pt-3'>
        <Row>
            <Col md={3}>
                <TypeBar/>
            </Col>
            <Col md={9}>
                <BrandBar/>
                <DeviceList />
            </Col>



        </Row>
       
       </Container>
    )
}