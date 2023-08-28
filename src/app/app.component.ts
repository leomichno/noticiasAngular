import { Component, Input } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listNoticias : any[] = [];

 constructor(private _noticiaService:NoticiaService){
 } 
 buscarNoticias(parametros:any){
   this._noticiaService.getNoticias(parametros).subscribe(dato => {console.log(dato)
   this.listNoticias = dato.articles;
  });
   
 }
}
