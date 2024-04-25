import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Contato } from '../contato/contato';
import { ContatoService } from '../contato/contato.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-criar-contato',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, HttpClientModule],
  providers:[ContatoService],
  templateUrl: './criar-contato.component.html',
  styleUrl: './criar-contato.component.css'
})
export class CriarContatoComponent implements OnInit{

  constructor(private service: ContatoService, private router: Router) { }
  ngOnInit(): void {
  }

  contato: Contato = {
    nome: "",
    telefone: "",
  email: ""
}

criarContato(){
  this.service.criar(this.contato).subscribe(()=> this.router.navigate(["/listar-contatos"]));
  console.log(this.contato);
}

}
