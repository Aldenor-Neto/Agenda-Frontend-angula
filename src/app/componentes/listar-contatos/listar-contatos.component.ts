import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Contato } from '../contato/contato';
import { ContatoService } from '../contato/contato.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listar-contatos',
  standalone: true,
  imports: [RouterLink, HttpClientModule, FormsModule],
  providers: [ContatoService],

  templateUrl: './listar-contatos.component.html',
  styleUrl: './listar-contatos.component.css'
})
export class ListarContatosComponent implements OnInit {

  listaGeral: Contato[] = [];
  lista: Contato[] = [];
  busca: string = "";

  constructor(private service: ContatoService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((lista) => {
      this.listaGeral = lista;
    });
    this.filtrarContatos();
  }

  filtrarContatos() {
    this.listaGeral.sort((a, b) => a.nome > b.nome ? 1 : -1);
    if (this.busca) {
      this.lista = this.listaGeral.filter(contato => contato.nome.toLowerCase().includes(this.busca.toLowerCase()));
    } else {
      this.lista = this.listaGeral;
    }
  }

}
