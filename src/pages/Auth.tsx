import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/constants';
const Auth = ()=>{
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    return(
        <Container 
        className='d-flex justify-content-center align-items-center'
        style={{height: window.innerHeight -54}}
        
        >
        {   isLogin? 
        <Form>
        <h2>Войти</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Почта</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            Здесь будет сообщение !
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="password" placeholder="Password" />
          <div className='mt-3'> Нет акаунта ? <NavLink  className='text-decoration-none' to={REGISTRATION_ROUTE}>зарегистрируйтесь</NavLink></div>
        </Form.Group>
       
        <Button variant="primary" type="submit">
           Войти
        </Button>
      </Form>
      :

      <Form>
         <h2>Регистрация</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Почта</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Здесь будет сообщение !
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        <div className='mt-3'> Зарегистрированы ? <NavLink  className='text-decoration-none' to={LOGIN_ROUTE}>Войти</NavLink></div>
      </Form.Group>
      <Button variant="primary" type="submit">
         Регистрация
      </Button>
    </Form>

}
      </Container>
    )
}

export default Auth
