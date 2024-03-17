import { observer } from "mobx-react-lite";
import { Row } from "react-bootstrap";
import DeviceComponent from "./DeviceComponent";
import { device } from "../utils/ObjectStore";
import { Idevices } from "../utils/interface";


export const DeviceList = observer( ()=>{
    return(
       <Row className="d-flex" >
        {device.devices.map((item:Idevices)=>{
       
        return(
            <DeviceComponent key={item.id} item={item}/>
        )
})}
        
        
        

       </Row>
    )
}

)