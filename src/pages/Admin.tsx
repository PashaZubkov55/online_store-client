import { Button, Container } from "react-bootstrap"

 const Admin =  () =>{
    return(
        <Container className="d-flex  flex-column">
            <Button 
            className="mt-3"
            variant={"outline-primary"}
            >
                Добавить тип
            </Button>
            <Button 
            className="mt-3"
            variant={"outline-primary"}
            >
                Добавить бренд
            </Button>
            <Button 
            className="mt-3"
            variant={"outline-primary"}
            >
                Добавить устройство
            </Button>


        </Container>
    )
}
export default Admin