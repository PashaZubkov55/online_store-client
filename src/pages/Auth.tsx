import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form'
import { NavLink, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { login, registration } from '../http/userAPI';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROTE } from '../utils/constants';
import { user } from '../utils/ObjectStore';
import { useNavigate } from 'react-router-dom';
const Auth = observer( ()=>{
    const navigate = useNavigate()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
 // const [email, setEmail] = useState('')
  //const [password, setPassword] = useState('')
  const {
    register,
    formState:{
      errors
    }, 
    handleSubmit,

  } = useForm()
    const signIn =  async (data:any)=>{
      try {
        let res :object = {}
      if (isLogin) {
          res  = await login(data.email, data.password)
          console.log(res)
        }
        else{ 
          res = await registration(data.email, data.password)
          
        }
        user.setUser(res)
       user.setAuth(true)
       navigate(SHOP_ROTE)
       
        
      } catch (e:any) {
        alert(e.response.data.message)
        
      }
     console.log(data)
      
    }
    return(
        <Container 
        className='d-flex justify-content-center align-items-center'
        style={{height: window.innerHeight -54}}
        
        >
        {   isLogin? 
        <Form onSubmit={handleSubmit(signIn)}>
        <h2>Войти</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Почта</Form.Label>
          <Form.Control type="email" placeholder="Email" 
          {...register('email', {
            required: 'Поле обязательное !',
            pattern:{
              value:/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
              message: 'Неверный Формат Email !'
          }

           })}
          />
          <Form.Text className="text-muted text-danger">
            {errors?.email && <p className='text-danger'>{errors?.email?.message} </p>}
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="password" placeholder="Пароль" 
           {...register('password',{
            required:'поле обязательно !',
            minLength: {
              value:6,
              message: 'пароль меньше 6 символов нельзя !'
            }
           })}
          
          />
          
          <Form.Text className="text-muted ">
            {errors?.password && <p className='text-danger'>{errors?.password?.message} </p>}
          </Form.Text>
          
          <div className='mt-3'> Нет акаунта ? <NavLink  className='text-decoration-none' to={REGISTRATION_ROUTE}>Зарегистрируйтесь</NavLink></div>
        </Form.Group>
       
        <Button variant="primary" type="submit">
           Войти
        </Button>
      </Form>
      :
      <Form onSubmit={handleSubmit(signIn)}>
      <h2>Регистрация</h2>

     


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Почта</Form.Label>
        <Form.Control type="email" placeholder="Email" 
        {...register('email', {
          required: 'Поле обязательное !',
          pattern:{
            value:/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
            message: 'Неверный Формат Email !'
        }

         })}
        />
        <Form.Text className="text-muted text-danger">
          {errors?.email && <p className='text-danger'>{errors?.email?.message} </p>}
        </Form.Text>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control type="password" placeholder="Пароль" 
         {...register('password',{
          required:'поле обязательно !',
          minLength: {
            value:6,
            message: 'пароль меньше 6 символов нельзя !'
          }
         })}
        
        />
        
        <Form.Text className="text-muted ">
          {errors?.password && <p className='text-danger'>{errors?.password?.message} </p>}
        </Form.Text>
        
        <div className='mt-3'> Нет акаунта ? <NavLink  className='text-decoration-none' to={LOGIN_ROUTE}>Войти</NavLink></div>
      </Form.Group>
     
      <Button variant="primary" type="submit">
         Регистрироватся
      </Button>
    </Form>
    

     

}
      </Container>
    )
}
)

export default Auth