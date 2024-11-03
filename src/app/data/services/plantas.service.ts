import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planta } from '../models/planta.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlantasService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Array<Planta>>(this.apiUrl);
  }
}
