import { DataSource } from '@angular/cdk/collections';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/interfaces/proceso.interface';
import { TestService } from 'src/app/service/test-service.service';

@Component({
  selector: 'app-proceso',
  templateUrl: './proceso.component.html',
  styleUrls: ['./proceso.component.scss']
})



export class ProcesoComponent implements AfterViewInit {

  codigoPaciente: string = 'CP12345';
  mailPaciente: string = '';

  ngAfterViewInit(): void {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
    this.buscarProcesosPage();
  }

  displayedColumns: string[] = ['accion', 'codigoPaciente', 'tipoTest', 'estado'];

  dataSource: MatTableDataSource<Paciente> = new MatTableDataSource<Paciente>([]);
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator | null;
  control:FormControl = new FormControl('');
  items = []



constructor(private testService:TestService,private router: Router){

}


buscarProcesosPage(){
    this.testService.buscarProcesosPage(0,0).subscribe(data=>{
      console.log(data)
      this.dataSource = data.content;
      this.dataSource.paginator = data.content.paginator;
    });
  }



  crear() {

  }

  enviar(element:any){
    this.testService.enviar(element.id).subscribe(p=>{
      element.estado = 'ENVIADO'

    })


  }

  verResultado(element:any){
    console.log(this.router)
    this.router.navigateByUrl('test/resultado/'+element.uniqueProcesoId);
  }

}
