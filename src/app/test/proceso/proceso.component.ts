import { DataSource } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TestService } from 'src/app/service/test-service.service';

@Component({
  selector: 'app-proceso',
  templateUrl: './proceso.component.html',
  styleUrls: ['./proceso.component.scss']
})
export class ProcesoComponent {
  dataSource!:DataSource<any>;
  control:FormControl = new FormControl('');
  items = []
constructor(private testService:TestService){
  this.buscarProcesosPage();

}

  buscarProcesosPage(){
    this.testService.buscarProcesosPage(0,0).subscribe(r=>{
      console.log("respusts",r);
    });
  }
}
