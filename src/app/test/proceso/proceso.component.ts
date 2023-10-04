import { DataSource } from '@angular/cdk/collections';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Paciente, wrapperCrearTest } from 'src/app/interfaces/proceso.interface';
import { TestService } from 'src/app/service/test-service.service';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-proceso',
  templateUrl: './proceso.component.html',
  styleUrls: ['./proceso.component.scss']
})



export class ProcesoComponent  {

  selectedTest: any;
  codigoPaciente: string = uuidv4();
  mailPaciente: string = '';
  catalogoTest: any;

  ngOnInit(){
  this.getCatalogoTest();

    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
      this.buscarProcesosPage();
    }
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
    const bodyDataCrearTest : wrapperCrearTest = {
      codigoPaciente: this.codigoPaciente,
      idTestCat: this.selectedTest ? this.selectedTest.id : '',
      mailPaciente: this.mailPaciente
    }
    console.log(bodyDataCrearTest)
    this.testService.crearTest(bodyDataCrearTest).subscribe((data:any)=>{
      console.log('se creo con exito')
    })
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

  getCatalogoTest() {
    this.testService.getCatalogoTest().subscribe((data: any) => {
        console.log(data);
        if (data.length !== 0) {
            this.catalogoTest = data;
        }
    });
}


}
