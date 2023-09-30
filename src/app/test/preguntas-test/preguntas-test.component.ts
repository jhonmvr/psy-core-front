import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from 'src/app/service/test-service.service';

interface Pregunta{
  contenido:string,
  id:number,
  idTest:number,
  orden:number,
  tipoControl:string
  opciones:Opcion[];
}

interface Opcion{
  id:number,
  idPregunta:number,
  valor:string
}
@Component({
  selector: 'app-preguntas-test',
  templateUrl: './preguntas-test.component.html',
  styleUrls: ['./preguntas-test.component.scss']
})
export class PreguntasTestComponent implements OnInit, OnDestroy{
  private sub: any;
  id!: string;
  preguntas!:Pregunta[];
  opciones!:Opcion[]
  constructor(private route: ActivatedRoute, private testService: TestService){

  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = params['uniqueID'];
      this.testService.buscarPreguntasByUniqueId(this.id).subscribe((preun:Array<any>)=>{
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
            this.preguntas = preun;
          });
        }

      });
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
