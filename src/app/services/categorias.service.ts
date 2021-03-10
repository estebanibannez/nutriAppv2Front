import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriasResponse } from 'src/app/models/categorias-response.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  endpoint: string;
  constructor(private http: HttpClient) {
    this.endpoint = environment.ResourceServer + '/categorias';
  }

  getCategorias() : Observable<CategoriasResponse> {
    return this.http.get<CategoriasResponse>(this.endpoint);
  }
}
