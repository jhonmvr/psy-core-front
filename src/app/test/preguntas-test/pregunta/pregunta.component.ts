import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { ControlI, Opcion } from '../preguntas-test.component';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.scss']
})
export class PreguntaComponent implements OnInit{
  @Input() control!: ControlI;

  formControl!:FormControl
  contenido!:string
  opciones!:Opcion[]

  ngOnInit() {
   this.formControl = this.control.formControl as FormControl;
   this.contenido = this.control.contenido;
   this.opciones = this.control.opciones;

  }
  change(x:any){
    console.log("xxxxx",x)
  }
}
