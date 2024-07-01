import { $authHost, $host } from "./index";



export const createType = async (type:Object) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async()=>{
    const {data} =  await $host.get('api/type')
    return data
} 
export const createBrand = async (brand:Object) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async()=>{
    const {data} = await $authHost.get('api/brand')
    return data
} 
export const createDevice = async (device: Object)=>{
    const {data} = await $authHost.post('apo/device', device)
    return data
}