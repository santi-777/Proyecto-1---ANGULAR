import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  producto:any
  imagenes:any=[]
  tags:any=[]
  description:any
  vaImgCrrusel:any=[]
  isLoading:boolean = true
  cantidad:any
  estado:any=""
  constructor(
    private activatedRoute:ActivatedRoute,
    private productsService:ProductsService
  ) { 
    const id = this.activatedRoute.snapshot.paramMap.get("id")
    console.log("id",id)
    this.productsService.getDescriptionById(id)
    .subscribe(
      (a:any)=>{
        this.description =a?.plain_text
      }
    )
    this.productsService.getById(id)
    .subscribe(
      (data:any)=>{
        //console.log(data)
        this.producto = data
        this.imagenes=data?.pictures
        if (this.imagenes.length>1){
          for( var i=1; i < this.imagenes.length ; i++){
            this.vaImgCrrusel[i-1]=this.imagenes[i];
          }
        }     
        this.isLoading=false
        
        this.tags=data?.tags
        this.cantidad=data?.available_quantity
        
      }
    )
  }
  
  comprar(){
    if(this.cantidad >0){
      this.estado="Gracias por su compra!"
      this.cantidad=this.cantidad-1
  }else{
    this.estado="Sin Stock"
  } 
  }

  ngOnInit(): void {
  }

}
