import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectojason';

 // articulos = new Object();
 articulos:any={};
 // articulos = null;



  constructor(private http: HttpClient) { }

  ngOnInit() {
    /*interface articulos{
      codigo: string;
      descripcion: string;
      precio: number;
    }*/



    this.http.get("https://www.datos.gov.co/resource/rubk-nymq.json")
      .subscribe(
        result => {
          this.articulos=result;
          console.log(result)
        },
        error => {
          console.log('problemas');
        }
      );
  }
}
