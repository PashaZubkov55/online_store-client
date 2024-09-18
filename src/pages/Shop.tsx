import { Col, Container, Row } from "react-bootstrap"
import { TypeBar } from "../components/TypeBar"
import { BrandBar } from "../components/BrandBar"
import { DeviceList } from "../components/DeviceList"
import { useEffect } from "react"
import { fetchBrands, fetchDevices, fetchTypes } from "../http/deviceAPI"
import { device } from "../utils/ObjectStore"

export const Shop =  () =>{
    useEffect(()=>{
        fetchTypes().then(data=> device.setTypes(data))
        fetchBrands().then(data=>device.setBrands(data))
        fetchDevices().then(data=>device.setDevices(data.rows))
    },[])
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