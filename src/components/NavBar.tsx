import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { SHOP_ROTE } from '../utils/constants';
import { Button } from 'react-bootstrap';
import { user } from '../utils/ObjectStore';
import { observer } from 'mobx-react-lite';




export const NavBar= observer(()=>{
    return(
        <>
       
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
         <NavLink className='navbar__title' to={SHOP_ROTE}><h1>Магазин</h1></NavLink>
         {user.isAuth?
         <Nav className="ml-auto">
            <Button>Амин панель</Button>
            <Button>Корзина</Button>
            <Button>войти</Button>
            </Nav>:

            <Nav className="ml-auto">
            <Button>Авторизация </Button>
            

          </Nav>
}
        </Container>
      </Navbar>
      </>
    )
})