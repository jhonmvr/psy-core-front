import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { StorageService } from './storage.service';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient, private storage: StorageService,) {

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
