import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';

@Injectable()
export class UsuarioService {

    constructor(private http: HttpClient) {}

    protected url: string = "https://jsonplaceholder.typicode.com/users";

    getUsers() : Observable<Usuario[]> {
        return this.http.get<Usuario[]>(this.url);
    }
}