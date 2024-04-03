import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROTE } from '../utils/constants';
import { Button } from 'react-bootstrap';
import { user } from '../utils/ObjectStore';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';




export const NavBar= observer(()=>{
  const navigate = useNavigate()
    return(
        <>
       
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
         <NavLink className='navbar__title' to={SHOP_ROTE}><h1>Магазин</h1></NavLink>
         {user.isAuth?
         <Nav className="ml-auto">
            <Button onClick={()=>{navigate(ADMIN_ROUTE)}}>Амин панель</Button>
            <Button>Корзина</Button>
            <Button onClick={()=>{navigate(LOGIN_ROUTE)}}>Войти</Button>
            </Nav>:

            <Nav className="ml-auto">
            <Button>
              <NavLink to={LOGIN_ROUTE} className="text-decoration-none text-white">  Авторизация</NavLink>
            
              </Button>
            

          </Nav>
}
        </Container>
      </Navbar>
      </>
    )
})