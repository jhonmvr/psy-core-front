import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { StorageService } from './storage.service';
import { tap } from 'rxjs';
import { Respuesta } from '../test/preguntas-test/preguntas-test.component';

@Injectable({
  providedIn: 'root'
})
export class TestService {



  constructor(private http: HttpClient, private storage: StorageService,) {

  }
  buscarRespuestaByProcesoUniqueId(uniqueId: string) {
    let serviceUrl = this.storage.appResourcesUrl + 'api/proceso/buscarRespuestaByProcesoUniqueId';
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let params = new HttpParams().set('uniqueId', uniqueId);
    let options = { headers: headers, params: params };
    return this.http.get(serviceUrl, options).pipe(
      tap( // Log the result or error
        (data: any) => data,
        error => { /*this.HandleError(error, new ReNoticeService(),this.dialog);*/ }
      )
    );
  }
  guardarRespuesta(uniqueID: string, respuestas:Respuesta[]) {
    let serviceUrl = this.storage.appResourcesUrl + 'api/proceso/guardarRespuestasByUniqueId';
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let params = new HttpParams().set('uniqueId', uniqueID);
    let options = { headers: headers, params: params };
    return this.http.post(serviceUrl, respuestas, options).pipe(
      tap( // Log the result or error
        (data: any) => data,
        error => { /*this.HandleError(error, new ReNoticeService(),this.dialog);*/ }
      )
    );
  }

  buscarPreguntasByUniqueId(uniqueId: string) {
    let serviceUrl = this.storage.appResourcesUrl + 'api/proceso/buscarPreguntasByUniqueId';
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let params = new HttpParams().set('uniqueId', uniqueId);
    let options = { headers: headers, params: params };
    return this.http.get(serviceUrl, options).pipe(
      tap( // Log the result or error
        (data: any) => data,
        error => { /*this.HandleError(error, new ReNoticeService(),this.dialog);*/ }
      )
    );
  }
  buscarOpcionByIdTest(idTest: string) {
    let serviceUrl = this.storage.appResourcesUrl + 'api/proceso/buscarOpcionByIdTest';
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let params = new HttpParams().set('idTest', idTest);
    let options = { headers: headers, params: params };
    return this.http.get(serviceUrl, options).pipe(
      tap( // Log the result or error
        (data: any) => data,
        error => { /*this.HandleError(error, new ReNoticeService(),this.dialog);*/ }
      )
    );
  }
  public buscarProcesosPage(page:number, size:number) {

    let serviceUrl = this.storage.appResourcesUrl + 'api/proceso/listAll';
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let params = new HttpParams().set('page', page).set('page', size);
    let options = { headers: headers, params: params };
    return this.http.get(serviceUrl, options).pipe(
      tap( // Log the result or error
        (data: any) => data,
        error => { /*this.HandleError(error, new ReNoticeService(),this.dialog);*/ }
      )
    );

  }
}
