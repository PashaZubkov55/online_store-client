import { Button, Container } from "react-bootstrap"
import CreateType from "../components/modals/CreateType"
import CreateDevice from "../components/modals/CreateDevice"
import CreateBrand from "../components/modals/CreateBrand"
import { useState } from "react"

 const Admin =  () =>{
    const[brandVisible, setBrandVisible] = useState(false)
    const[typeVisible, setTypeVisible] = useState(false)
    const[deviceVisible, setdeviceVisible] = useState(false)
    return(
        <Container className="d-flex  flex-column">
            <Button 
            className="mt-3"
            variant={"outline-primary"}
            onClick={()=>{setTypeVisible(true)}}
            >
                Добавить тип
            </Button>
            <Button 
            className="mt-3"
            variant={"outline-primary"}
            onClick={()=>{setBrandVisible(true)}}
            >
                Добавить бренд
            </Button>
            <Button 
            className="mt-3"
            variant={"outline-primary"}
            onClick={()=>{setdeviceVisible(true)}}
            >
                Добавить устройство
            </Button>
            <CreateType show={typeVisible} onHide={()=>{setTypeVisible(false)}}/>
            <CreateDevice show={deviceVisible} onHide={()=>{setdeviceVisible(false)}}/>
            <CreateBrand show={brandVisible} onHide={()=>{setBrandVisible(false)}} />

        </Container>
    )
}
export default Admin