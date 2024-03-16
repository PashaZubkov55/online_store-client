import { observer } from "mobx-react-lite";
import { Card, Row } from "react-bootstrap";
import { device } from "../utils/ObjectStore";

export const BrandBar = observer( ()=>{
    return(
        <Row >
          {device.brands.map((brand)=>
             <Card
             
                className=" p-3 w-25  "
                style={{cursor: 'pointer'}}
                key={brand.id}
                onClick={()=>{device.setSelectedBrand(brand)}}
                border={brand.id == device.selectedBrand.id ? 'danger': 'light'}
               
            >
                {brand.name}
            </Card>
          )}

        </Row>
    )
}

)