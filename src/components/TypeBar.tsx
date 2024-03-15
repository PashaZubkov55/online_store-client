 
 import { observer } from 'mobx-react-lite';
 import ListGroup from 'react-bootstrap/ListGroup';
import { device } from '../utils/ObjectStore';

 
 export const TypeBar  = observer( ()=>{
    
    return (
        <>
         <ListGroup >
        {device.types.map(type=>{
            return  <ListGroup.Item key={type.id}>
                {type.name}
            </ListGroup.Item>
        })}
      
    </ListGroup>
      </>
    )
})