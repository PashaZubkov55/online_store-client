import {BrowserRouter} from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';
import { observer } from 'mobx-react-lite'
import './App.css'
import AppRouter from './components/AppRouter'
import { NavBar } from './components/NavBar'
import { useEffect, useState } from 'react'
import { check } from './http/userAPI'
import { user } from './utils/ObjectStore'


let App  = observer(()=> {
 
const[loading, setLoading] = useState(true)
useEffect(()=>{
 setTimeout(()=>{
  check().then(data=>{
    user.setUser(true),
    user.setAuth(true)
}).finally(()=>{setLoading(false)})
 },1000)
},[]) 

if (loading) {
  return  <div className='d-flex justify-content-center  align-items-center '
  style={{height: window.innerHeight -54}}
  >
   <Spinner animation="border" role="status" variant="primary"/>
  </div>
 
  
}
  return (
    <>
     
      <BrowserRouter>
        <NavBar/>
        <AppRouter />  
        </BrowserRouter>
        </>
  )
})

export default App
