import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TestService } from 'src/app/service/test-service.service';


interface Respuesta {
  id: number,
  orden: number,
  respuesta: string,
  pregunta: string
}

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit, OnDestroy {


  private sub: any;
  uniqueID!: string;
  respuestas!:Respuesta[]
  interpretaciones!:any
  total!:number
  constructor(private route: ActivatedRoute, private testService: TestService) {

  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.uniqueID = params['uniqueID'];
      this.testService.buscarRespuestaByProcesoUniqueId(this.uniqueID).subscribe((preun: Respuesta[]) => {
        console.log("Respuesta ", preun);
        this.respuestas = preun

      });


      this.testService.buscarInterpretacio(this.uniqueID).subscribe((preun: any[]) => {
        this.interpretaciones = preun

      });
      this.testService.totalInterpretacio(this.uniqueID).subscribe((preun: number) => {
        this.total = preun

      });
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
