import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imagem } from './imagem';

@Injectable()
export class ImagemService {

    constructor(private http: HttpClient) {}

    protected url: string = "https://jsonplaceholder.typicode.com/photos";

    getImages() : Observable<Imagem[]> {
        return this.http.get<Imagem[]>(this.url);
    }
}