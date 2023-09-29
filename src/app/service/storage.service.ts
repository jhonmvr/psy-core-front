import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  tokeType: string | null = null;
  accessToken: string | null = null;
  keyUnencrypt: string = '';
  segRootContextUrl: string = '';
  segResourcesUrl: string = '';
  userRolServiceUrl: string = '';
  menuServiceUrl: string = '';
  appResourcesUrl: string = '';
  appWebSocketUrl: string = '';
  genericResourcesUrl: string = '';
  mongoDb: string = '';
  mongoAlertaColeccion: string = '';
  crmResourcesUrl: string = '';
  softBaseBankUrl: string = '';
  databaseName: string = '';
  estructuraArchivos: string = '';
  nuevaNotificacion: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    this.init();
  }

  async init() {
    // If using, define drivers he  re: await this.storage.defineDriver(/*...*/);
    //console.log(" entra a contructor")
    const token_type =  localStorage.getItem(environment.token_type);
    const access_token =  localStorage.getItem(environment.access_token);
    this.tokeType = token_type;
    this.accessToken = access_token;

  }

  // Create and expose methods that users of this service can
  // call, for example:
  public set( key:string, value: any) {
    localStorage.setItem(key,value);
  }

  public get( key:string) {
     return localStorage.getItem(key);
  }


  public async setParameter() {
    //console.log(" entra a set parameter")
    let keyUnencrypt = await localStorage.getItem(environment.prefix +'RE011');
    if(keyUnencrypt && keyUnencrypt){
      this.keyUnencrypt = atob( keyUnencrypt  );
    }
    //https://plataforma-oro.quski.ec:28888/quski-app/1.0.0/
    let segRootContextUrl = await localStorage.getItem( environment.prefix +  'RE001');
    if(segRootContextUrl && segRootContextUrl){
      this.segRootContextUrl = atob(segRootContextUrl).replace(this.keyUnencrypt, '');
    }
    //https://plataforma-oro.quski.ec:28888/quski-gaf/1.0.0/
    let segResourcesUrl = await localStorage.getItem(environment.prefix +'RE002');
    if( segResourcesUrl && segResourcesUrl ){
      this.segResourcesUrl = atob(segResourcesUrl).replace(this.keyUnencrypt, '');
    }

    let userRolServiceUrl = await localStorage.getItem(environment.prefix +'RE003');
    if( userRolServiceUrl && userRolServiceUrl ){
      this.userRolServiceUrl = atob(userRolServiceUrl).replace(this.keyUnencrypt, '');
    }

    let menuServiceUrl = await localStorage.getItem(environment.prefix +'RE004');
    if( menuServiceUrl && menuServiceUrl ){
      this.menuServiceUrl = atob(menuServiceUrl).replace(this.keyUnencrypt, '');
    }

    let appResourcesUrl = await localStorage.getItem(environment.prefix +'RE006');
    if( appResourcesUrl && appResourcesUrl ){
      this.appResourcesUrl = atob(appResourcesUrl).replace(this.keyUnencrypt, '');
    }
     /* appResourcesUrl = await localStorage.getItem(environment.prefix +'RE005');
    if( appResourcesUrl && appResourcesUrl ){
      this.appResourcesUrl = atob(appResourcesUrl).replace(this.keyUnencrypt, '');
    } */

    let appWebSocketUrl = await localStorage.getItem(environment.prefix +'RE007');
    if( appWebSocketUrl && appWebSocketUrl ){
      this.appWebSocketUrl = atob(appWebSocketUrl).replace(this.keyUnencrypt, '');
    }

    let genericResourcesUrl = await localStorage.getItem(environment.prefix +'RE008');
    if( genericResourcesUrl && genericResourcesUrl){
      this.genericResourcesUrl = atob(genericResourcesUrl).replace(this.keyUnencrypt, '');
    }



    let mongoDb = await localStorage.getItem(environment.prefix +'RE009');
    if(mongoDb && mongoDb){
      this.mongoDb = atob(mongoDb).replace(this.keyUnencrypt, '');
    }
    let mongoAlertaColeccion = await localStorage.getItem(environment.prefix +'RE010');
    if(mongoAlertaColeccion && mongoAlertaColeccion){
      this.mongoAlertaColeccion = atob(mongoAlertaColeccion).replace(this.keyUnencrypt, '');
    }

    let crmResourcesUrl = await localStorage.getItem(environment.prefix +'RE012');
    if(crmResourcesUrl && crmResourcesUrl){
      this.crmResourcesUrl = atob(crmResourcesUrl).replace(this.keyUnencrypt, '');
    }

    let softBaseBankUrl = await localStorage.getItem(environment.prefix +'RE013');
    if(softBaseBankUrl && softBaseBankUrl){
      this.softBaseBankUrl = atob(softBaseBankUrl).replace(this.keyUnencrypt, '');
    }
    //https://plataforma-oro.quski.ec:28888/quski-gaf/1.0.0/
    this.softBaseBankUrl = this.segResourcesUrl;
    //this.appResourcesUrl = this.segRootContextUrl;
    this.appResourcesUrl = 'http://localhost:8080/';
    //console.log(" datos appResourcesUrl", this.appResourcesUrl)
    this.databaseName="quski-core-documento";
    this.estructuraArchivos="estructura-archivos";

}

}
