import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { DatosService } from './datos.service';//importamos el servicio
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent implements OnInit{


title = 'proyectojson';

 displayedColumns = ['fecha_hecho', 'departamento', 'municipio', 'tipo_delito', 'cantidad'];
 dataSource: any;

 @ViewChild(MatPaginator) paginator!: MatPaginator ;
 @ViewChild(MatSort) sort!: MatSort;



  constructor(private datos:DatosService) { }

  ngOnInit() {
    this.renderDataTable();
  }

  renderDataTable() {
    this.datos.getRegistros()
      .subscribe(
          x => {
    this.dataSource = new MatTableDataSource();
    this.dataSource.data = x;
    //console.log(this.dataSource.data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  },
  error => {
    console.log('There was an error while retrieving Delitos!' + error);
  });
 }

applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
}



}
