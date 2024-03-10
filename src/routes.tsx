import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Basket from "./pages/Basket"
import DevicePage from "./pages/DevicePage"
import { Shop } from "./pages/Shop"
import { ADMIN_ROUTE, BASKET_ROUT, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROTE } from "./utils/constants"

export const authRouts =[

    {
        path: ADMIN_ROUTE,
        component: Admin
    },
    {
        path: BASKET_ROUT,
        component:Basket 
    },
   
]
export const publicRouts =[
    {
        path:SHOP_ROTE ,
        component: Shop
    },
   
    {
        path: DEVICE_ROUTE + '/:id',
        component: DevicePage
    },
    {
        path: LOGIN_ROUTE,
        component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        component: Auth
    },

]
