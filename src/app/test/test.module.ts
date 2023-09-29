import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcesoComponent } from './proceso/proceso.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTableModule } from "@angular/material/table";

const routes: Routes = [
  {
    path: '',
    component: ProcesoComponent

  }

]

@NgModule({
  declarations: [
    ProcesoComponent
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
