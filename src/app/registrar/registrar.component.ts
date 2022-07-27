import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  estado:any=""
  myForm:FormGroup
  constructor(
    private fb:FormBuilder
  ) { 
    this.myForm = this.fb.group({
      nombre:["",[Validators.required]],
      apellido:["",[Validators.required]],
      telefono:[""],
      email:["",[Validators.required]],
      clave:["",[Validators.required,Validators.minLength(6),Validators.maxLength(10)]]
    })
  }
  registrarse(){
    console.log(this.myForm.value)
    this.estado="Fromulario enviado con exito!"
    window.open("/inicio/", "_self");
  }
  

  ngOnInit(): void {
  }

}
