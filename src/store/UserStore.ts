import { makeAutoObservable } from "mobx"



export  class UserStore{
   
    _isAuth:boolean = true
    _user:object = {}
   
    constructor(){
   
        makeAutoObservable(this)
    
    }
 
   setAuth(val:boolean){
    this._isAuth = val
   }
   setUser(user:boolean){
    this._user = user
   }

   get isAuth(){
        return this._isAuth
   }
   get user(){
    return this._user
}
}
