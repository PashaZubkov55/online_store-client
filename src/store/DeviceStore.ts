import { Ibrands, Idevices, Itypes } from "../utils/interface"
import { makeAutoObservable } from "mobx"

export  class DeviceStore{
   
      
   _types :Array<Itypes>=[]

  _devices: Array<Idevices>=[]

  _brands:Array<Ibrands> = []
  
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
