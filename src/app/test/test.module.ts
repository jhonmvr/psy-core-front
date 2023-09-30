import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcesoComponent } from './proceso/proceso.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from "@angular/material/radio";
import { PreguntasTestComponent } from './preguntas-test/preguntas-test.component';
import { ResultadoComponent } from './resultado/resultado.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { PreguntaComponent } from './preguntas-test/pregunta/pregunta.component';
import { MensajeErrorControlComponent } from './mensaje-error-control/mensaje-error-control.component'

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
    path: 'resultado/:uniqueID',
    component: ResultadoComponent

  }

]

@NgModule({
  declarations: [
    ProcesoComponent,
    PreguntasTestComponent,
    ResultadoComponent,
    PreguntaComponent,
    MensajeErrorControlComponent
  ],
  imports: [
    MatProgressBarModule,
    MatRadioModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    CommonModule,

  ]
})
export class TestModule { }
