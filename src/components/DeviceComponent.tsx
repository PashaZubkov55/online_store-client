import { Card, Col, Image, NavItem } from "react-bootstrap";
import { Idevices } from "../utils/interface";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/constants";


  const DeviceComponent = ({item<Idevices>})=>{
    const navigate = useNavigate()
    return(
        <Col md={3} className="mt-3" onClick={(()=> navigate(DEVICE_ROUTE + '/'+ item.id))}>
            <Card className="w-15  cursor-pointer ">
               <Image className="mt-2" width={150} height={150} src={item.img} />
                <div className=" ms-1 d-flex justify-content-between align-items-center">
                <div className="mt-3">honor</div>
                <div className="mt-3">
                
                <div className="rating">
                    <span className="rating__text"> 5</span>
                    <Image className="rating__icon" width={50} height={50} src='https://static.bijouteria.ch/1000/tat175.jpg'/>
                </div>
               
              
                </div>
                </div>
                <div className="ms-1 d-flex ">
                {item.name}
                </div>
               

                
                

            </Card>
        </Col>
    ) 
}

export default DeviceComponent