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
    },
    {
      id: 2,
      name: 'sunsung'
      },
      {
        id: 3,
        name: 'linovo'
        },
        {
          id: 4,
          name: 'huawei'
          },
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
        img:'https://vega.am/image/cache/catalog/1HRACH/2020/2021/2022/Hulis/Smart%20Heraxosnner/HONOR%20X7%20CMA-LX1%204GB%20128GB%20(BL)-2000x1500.jpg'
    },
    {
        id:3,
        name:'x8',
        price:10000,
        rating:5,
        img:'https://diamondelectric.ru/images/4293/4292017/smartfon_honor_x8_14.jpg'
    },
  

]
_selectedType = {}
_selectedBrand = {}
constructor(){
    makeAutoObservable(this)
   } 
 
setTypes(types:any){
    this._types = types
}

setBrands(brands:any){
    this._brands = brands
}

setDevices(devices:any){
     this._devices = devices
}
setSelectedType (type:any){
    this._selectedType = type
}
setSelectedBrand (brand:any){
  this._selectedBrand = brand
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
    get selectedBrand(){
      return this._selectedBrand
    }
 

}
