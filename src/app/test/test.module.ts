import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcesoComponent } from './proceso/proceso.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTableModule } from "@angular/material/table";
import { PreguntasTestComponent } from './preguntas-test/preguntas-test.component';
import { ResultadoComponent } from './resultado/resultado.component';

const routes: Routes = [
  {
    path: '',
    component: ProcesoComponent

  },
  {
    path: ':uniqueID',
    component: PreguntasTestComponent

  },
  {
    path: 'resultado/:id',
    component: ResultadoComponent

  }

]

@NgModule({
  declarations: [
    ProcesoComponent,
    PreguntasTestComponent,
    ResultadoComponent
  ],
  imports: [
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class TestModule { }
