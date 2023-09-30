import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mensaje-error-control',
  templateUrl: './mensaje-error-control.component.html',
  styleUrls: ['./mensaje-error-control.component.scss']
})
export class MensajeErrorControlComponent {
  @Input() control!:FormControl;

  validar(){

    if(this.control.errors &&  this.control.errors['pattern']){
      return 'patron obligatorio ' + this.control.errors['pattern'].requiredPattern;
    }
    if(this.control.errors &&  this.control.errors['required']){
      return 'es requerido';
    }
    if(this.control.errors &&  this.control.errors['maxlength']){
      return 'logitud maxima ' + this.control.errors['maxlength'].requiredLength;
    }
    if(this.control.errors &&  this.control.errors['email']){
      return 'no es un email valido';
    }
    if(this.control.errors &&  this.control.errors['cedulaIncorecta']){
      return 'cedula no valida';
    }
    if(this.control.errors &&  this.control.errors['minlength']){
      return 'logitud minima ' + this.control.errors['minlength'].requiredLength;
    }
    if(this.control.errors &&  this.control.errors['min']){
      return 'valor minimo ' + this.control.errors['min'].min;
    }
    if(this.control.errors &&  this.control.errors['max']){
      return 'valor maximo ' + this.control.errors['max'].max;
    }
    if(this.control.errors &&  this.control.errors['fechaNacimientoIncorecta']){
      return 'fecha nacimiento no valida';
    }


    return '';
  }
}
