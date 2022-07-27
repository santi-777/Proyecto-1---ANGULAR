import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  search1:any='ipod'
  search2:any=''
  productos:any=[]
  isLoading:boolean = true
  buscar(){
    if(this.search2==''){
      this.search2='ipod'
    }
    this.productosService.getAll(this.search2)
    .subscribe(
      (data:any)=>{
        console.log(data)
        this.productos = data
        this.isLoading=false
      }
    )
  }
  constructor(
    private productosService:ProductsService
  ) { 
    this.productosService.getAll(this.search1)
    .subscribe(
      (data:any)=>{
        //console.log(data)
        this.productos = data
        this.isLoading=false
      }
    ) 
  }
  
  ngOnInit(): void {
  }

}
