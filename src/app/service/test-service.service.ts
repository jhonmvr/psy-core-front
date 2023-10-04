import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { StorageService } from './storage.service';
import { tap } from 'rxjs';
import { Respuesta } from '../test/preguntas-test/preguntas-test.component';
import { wrapperCrearTest } from '../interfaces/proceso.interface';

@Injectable({
  providedIn: 'root'
})
export class TestService {




  constructor(private http: HttpClient, private storage: StorageService,) {

  }
  totalInterpretacio(uniqueID: string) {
    let serviceUrl = this.storage.appResourcesUrl + 'api/proceso/totalInterpretacion';
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let params = new HttpParams().set('uniqueId', uniqueID);
    let options = { headers: headers, params: params };
    return this.http.get(serviceUrl, options).pipe(
      tap( // Log the result or error
        (data: any) => data,
        error => { /*this.HandleError(error, new ReNoticeService(),this.dialog);*/ }
      )
    );
  }


  buscarInterpretacio(uniqueID: string) {
    let serviceUrl = this.storage.appResourcesUrl + 'api/proceso/buscarInterpretacio';
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let params = new HttpParams().set('uniqueId', uniqueID);
    let options = { headers: headers, params: params };
    return this.http.get(serviceUrl, options).pipe(
      tap( // Log the result or error
        (data: any) => data,
        error => { /*this.HandleError(error, new ReNoticeService(),this.dialog);*/ }
      )
    );
  }
  enviar(idProceso: any) {
    let serviceUrl = this.storage.appResourcesUrl + 'api/proceso/enviar';
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let params = new HttpParams().set('idProceso', idProceso);
    let options = { headers: headers, params: params };
    return this.http.get(serviceUrl,  options).pipe(
      tap( // Log the result or error
        (data: any) => data,
        error => { /*this.HandleError(error, new ReNoticeService(),this.dialog);*/ }
      )
    );
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
  crearTest( bodyData : wrapperCrearTest) {
    let serviceUrl = this.storage.appResourcesUrl + 'api/proceso/crear';
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    let options = { headers: headers};
    return this.http.post(serviceUrl, bodyData, options).pipe(
      tap( // Log the result or error
        (data: any) => data,
        error => { /*this.HandleError(error, new ReNoticeService(),this.dialog);*/ }
      )
    );
  }

  getCatalogoTest() {
    //let serviceUrl = 'https://3t2pht99-8080.use2.devtunnels.ms/api/test'
    let serviceUrl = this.storage.appResourcesUrl + 'api/test/';
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
   // let params = new HttpParams().set('uniqueId', uniqueId);
    let options = { headers: headers};
    return this.http.get(serviceUrl, options).pipe(
      tap( // Log the result or error
        (data: any) => data,
        error => { /*this.HandleError(error, new ReNoticeService(),this.dialog);*/ }
      )
    );
  }

}
