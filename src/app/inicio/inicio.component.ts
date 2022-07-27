import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  estado:any=""
  myForm:FormGroup
  constructor(
    private fb:FormBuilder
  ) { 
    this.myForm = this.fb.group({
      email:["",[Validators.required]],
      clave:["",[Validators.required]]
    })
  }
  iniciar(){
    console.log(this.myForm.value)
    this.estado="Wellcome!"
    window.open("/productos/", "_self");
  }

  ngOnInit(): void {
  }

}
