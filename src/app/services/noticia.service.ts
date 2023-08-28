import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  constructor(private http:HttpClient) { }

  getNoticias(parametros:any): Observable<any>{
    const URL = 'https://newsapi.org/v2/top-headlines?country='+parametros.pais+'&category='+parametros.categoria+'&apiKey=a21227f77e4f49fe813893fd3b43a5ad';
    return this.http.get(URL)
  }

}
