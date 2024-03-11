import { Routes, Route, Navigate } from "react-router-dom";
import { authRouts, publicRouts } from "../routes";
import { SHOP_ROTE } from "../utils/constants";
import { user } from "../utils/ObjectStore";
import { useEffect } from "react";

const AppRouter = ()=>{
 
 useEffect(()=>{
   console.log(user.isAuth)
 },[])
 return(
    <Routes>
        { user.isAuth && authRouts.map(({path, component})=>
        <Route key={path} path={path} Component={component}/>
        )}
        { publicRouts.map(({path, component})=>
        <Route key={path} path={path} Component={component}/>
        )}
         <Route path="*"element={<Navigate to={SHOP_ROTE} replace />} />
    </Routes>
   
 )


}
export default AppRouter