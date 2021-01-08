import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuarios.service';
import {MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html'
})

export class ListaUsuariosComponent implements OnInit, AfterViewInit {


  displayedColumns: string[] = ['name', 'username', 'email'];

  public usuarios : Usuario[];

  recoveredData: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngAfterViewInit() {
    this.recoveredData.paginator = this.paginator;
  }

  constructor(private usuarioService : UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getUsers().subscribe(usuarios => {this.usuarios = usuarios; console.log(usuarios)}, error => console.log(error));
    var dataSource = new MatTableDataSource<Usuario>(this.usuarios);
    this.recoveredData(dataSource);
    
  }

  public setRecoveredData(recoveredData: any) {
    this.recoveredData = recoveredData;
  }

}


