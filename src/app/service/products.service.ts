import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from "rxjs/operators"
import {lastValueFrom, Observable} from "rxjs"
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http:HttpClient
  ) { }
  getAll(search: any){
    return this.http.get("https://api.mercadolibre.com/sites/MLA/search?q="+search).pipe(map((value:any)=>value["results"]))
  }
  getAllPromise(){
    //return this.http.get("https://api.mercadolibre.com/sites/MLA/search?q=ipod").pipe(map((value:any)=>value["results"])).toPromise()
     return lastValueFrom(this.http.get("https://api.mercadolibre.com/sites/MLA/search?q=ipod"))
  }
  getById(id:any){
    return this.http.get("https://api.mercadolibre.com/items/"+id)
  }
  getDescriptionById(id:any){
    return this.http.get("https://api.mercadolibre.com/items/"+id+"/description")
  }/*
  getById(id:any){
    const product = this.http.get("https://api.mercadolibre.com/items/"+id)
    const descrip = this.http.get("https://api.mercadolibre.com/items/"+id+"/description")
    const producto = {...product,...descrip}
    return producto
  }*/
}
