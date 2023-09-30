import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TestService } from 'src/app/service/test-service.service';

export interface Respuesta{
  tbPsyPregunta:any,
  respuesta:string,
  tbPsyOpcionPregunta:any

}
interface Pregunta{
  contenido:string,
  id:number,
  idTest:string,
  orden:number,
  tipoControl:string
  opciones:Opcion[];
}

export interface Opcion{
  id:number,
  idPregunta:number,
  valor:string
}
export interface ControlI{
  formControl:AbstractControl,
  contenido:string
  opciones:Opcion[]
}
@Component({
  selector: 'app-preguntas-test',
  templateUrl: './preguntas-test.component.html',
  styleUrls: ['./preguntas-test.component.scss']
})
export class PreguntasTestComponent implements OnInit, OnDestroy{
  private sub: any;
  uniqueID!: string;
  preguntas!:ControlI[];
  opciones!:Opcion[]
  controles:FormGroup = new FormGroup([]);

  constructor(private route: ActivatedRoute, private testService: TestService){

  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.uniqueID = params['uniqueID'];
      this.testService.buscarPreguntasByUniqueId(this.uniqueID).subscribe((preun:Pregunta[])=>{
        console.log("preguntas ",preun);

        if(preun.length >0 && preun[0].idTest){
          this.testService.buscarOpcionByIdTest(preun[0].idTest).subscribe(opc=>{
            let pruntas = preun.map((p:Pregunta)=>{
              p.opciones = new Array<Opcion>();
              opc.forEach((element:Opcion) => {
                if(element.idPregunta == p.id){
                  p.opciones.push(element)

                }
              });
              return p;
            })
            console.log("opciones ",opc);
            //this.opciones = p;
            this.preguntas = new Array<ControlI>();
            preun.forEach(pregunta=>{
              this.controles.addControl(pregunta.id.toString(), new FormControl('',Validators.required));
              this.preguntas.push({formControl:this.controles.controls[pregunta.id],
                 contenido:pregunta.contenido,
                opciones:pregunta.opciones})

            })
          });
        }

      });
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }


  guardarRespuestas(){
    this.controles.markAllAsTouched()
    console.log("this.controles",this.controles)
    if(this.controles.invalid){
      return;
    }

    let respuestas:Respuesta[] = this.preguntas.map(p=>{ let respuesta:Respuesta ={

        tbPsyPregunta: {id:p.formControl.value['idPregunta']},
       respuesta:p.formControl.value['valor'],
       tbPsyOpcionPregunta: {id:p.formControl.value['id']}
    }
    return respuesta
  })
    console.log("las respuestas",respuestas);

    this.testService.guardarRespuesta(this.uniqueID, respuestas ).subscribe(response=>{
      console.log("response guardar",response)
    })

  }
}
