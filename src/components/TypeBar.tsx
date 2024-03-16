 
 import { observer } from 'mobx-react-lite';
 import ListGroup from 'react-bootstrap/ListGroup';
import { device } from '../utils/ObjectStore';

 
 export const TypeBar  = observer( ()=>{
    
    return (
        <>
         <ListGroup >
        {device.types.map(type=>
          <ListGroup.Item
            className='cursor-pointer'
            key={type.id}
            active={type.id === device.selectedType.id} 
            onClick={()=>{device.setSelectedType(type)}}
            
            >
                {type.name}
            </ListGroup.Item>
        )}
      
    </ListGroup>
      </>
    )
})