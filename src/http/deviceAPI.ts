import { $authHost, $host } from "./index";



export const createType = async (type:Object) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async()=>{
    const {data} = $host.get('api/type')
    return data
} 