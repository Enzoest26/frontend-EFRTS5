import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/app/util/constantes';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  private urlListar = BASE_URL + "/reporte";
  constructor(private http: HttpClient) { }

  obtenerOrdenes(): Observable<any> {
    return this.http.get<any>(`${this.urlListar}`);
  }
}
