import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Contato } from '../contato/contato';
import { ContatoService } from '../contato/contato.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-listar-contatos',
  standalone: true,
  imports: [RouterLink, HttpClientModule],
  providers: [ContatoService],

  templateUrl: './listar-contatos.component.html',
  styleUrl: './listar-contatos.component.css'
})
export class ListarContatosComponent implements OnInit {

  lista: Contato[] = [];

  constructor(private service: ContatoService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((lista) => {
      this.lista = lista;
    });
  }

}
