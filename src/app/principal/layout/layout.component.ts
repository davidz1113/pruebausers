import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PrincipalServices } from '../../servicios/principal.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
// import * as $ from 'jquery'
declare const $: any; // importancion de la varible de bootstrap
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  providers: [PrincipalServices]
})
export class LayoutComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'phone', 'username', 'address']; //nombre de cada columna
  dataSource: MatTableDataSource<any> = new MatTableDataSource([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  //variable global para asignar el usuario selecciuonado de la tabla
  userSeleccionado: any = null; 

  /**
   * 
   * @param _principalService injeccion del servicio principal
   */
  constructor(private _principalService: PrincipalServices) {

  }

  ngOnInit() {
    this.consultarUsuarios(); //llamado de la consulta de usuarios al iniciar el componente
  }


  /**
   * consulta los usuarios de la api, en la respuesta
   */
  consultarUsuarios() {
    this._principalService.consultarUsuarios().subscribe(
      (response: any) => {
        // console.log(response);
        if (response) { //si la respuesta existe
          this.dataSource = new MatTableDataSource(response);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        } else {
          console.log('Error');
        }
      },
      err => { //MANEJO DE ERRORES
        console.log(err);
      }
    )
  }


  /**
   * metodo que recibe el objeto seleccionado de la tabla
   * y que es enviado al modal
   * @param row objeto de la tabla
   */
  abrirModalDireccion(row) {
    //asignacion de la variable del usuario seleccionado
    this.userSeleccionado = row;
    //dispara el evento del modal
    $('#exampleModalLong').modal('show');
  }


}
