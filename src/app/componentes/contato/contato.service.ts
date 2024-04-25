import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contato } from './contato';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private readonly API = 'http://localhost:3000/contatos'

  constructor(private http: HttpClient) { }

  criar(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.API, contato);
  }

  listar(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.API);
  }

}
