import { Routes, Route, Navigate } from "react-router-dom";
import { authRouts, publicRouts } from "../routes";
import { SHOP_ROTE } from "../utils/constants";

const AppRouter = ()=>{
 const isAuth:Boolean = false
 return(
    <Routes>
        { isAuth && authRouts.map(({path, component})=>
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