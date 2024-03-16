import { Ibrands, Idevices, Itypes } from "../utils/interface"
import { makeAutoObservable } from "mobx"

export  class DeviceStore{
   
      
   _types :Array<Itypes>=[
    {
    id: 1,
    name: 'холодильники'
  },
  {
    id: 2,
    name: 'смартфоны'
  },
  {
    id: 3,
    name: 'айфоны'
  },
]
  _brands: Array<Ibrands>=[
    {
    id: 1,
    name: 'honor'
    }
]

  _devices: Array<Idevices>=[
    {
        id:1,
        name:'9c',
        price:10000,
        rating:5,
        img:'https://cdn1.ozone.ru/s3/multimedia-u/6379580718.jpg'
    },
    {
        id:2,
        name:'x7',
        price:10000,
        rating:5,
        img:'https://ae04.alicdn.com/kf/S33f31cf6a3714c7a81ec91e9beb66f1b2/HONOR-X7-Android-11-90-5-7-FullView.jpg_640x640.jpg'
    },
    {
        id:1,
        name:'x8',
        price:10000,
        rating:5,
        img:'https://diamondelectric.ru/images/4293/4292017/smartfon_honor_x8_14.jpg'
    }
]
_selectedType = {}
constructor(){
    makeAutoObservable(this)
   } 
 
setTypes(types:any){
    this._types = types
}

setBrands(brands:any){
    this._brands = brands
}

dsetDevices(devices:any){
     this._devices = devices
}
setSelectedType (type:any){
    this._selectedType = type
}
  get types(){
    return this._types
}
    get brands(){
        return this._brands
    }
    get devices(){
        return this._devices
    }
    get selectedType(){
        return this._selectedType

    }
 

}
