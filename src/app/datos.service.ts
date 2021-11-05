import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Delito } from './delito';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http: HttpClient) { }

  public getRegistros():Observable<Delito[]>{
    return this.http.get<Delito[]>('https://www.datos.gov.co/resource/d7zw-hpf4.json?$limit=18570');
  }

}
