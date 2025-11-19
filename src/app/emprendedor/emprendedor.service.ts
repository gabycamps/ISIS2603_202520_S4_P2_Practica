import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Emprendedor } from './emprendedor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmprendedorService {

  private ruta = 'https://raw.githubusercontent.com/k-garces/ISIS2603_202520_S4_P2_Practica/refs/heads/main/json/emprendedores.json';
  private ruta2 = 'https://raw.githubusercontent.com/k-garces/ISIS2603_202520_S4_P2_Practica/refs/heads/main/json/';

  constructor(private http: HttpClient) {}

  getEmprendedores(): Observable<Emprendedor[]> {
    return this.http.get<Emprendedor[]>(this.ruta);
  }

  getEmprendedor(id: number): Observable<Emprendedor> {
    const url = `${this.ruta2}${id}/emprendedor.json`
    return this.http.get<Emprendedor>(url);
  }
}
