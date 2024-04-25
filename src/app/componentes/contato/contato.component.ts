import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Contato } from './contato';
import { Router } from 'express';
import { HttpClientModule } from '@angular/common/http';
import { ContatoService } from './contato.service';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [RouterLink, HttpClientModule],
  providers: [ContatoService],

  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent implements OnInit {

  constructor(
    private service: ContatoService,
    ) { }

  contato: Contato = {
    id: 0,
    nome: "",
    telefone: "",
    email: ""
  }


  ngOnInit(): void {
  }

}
