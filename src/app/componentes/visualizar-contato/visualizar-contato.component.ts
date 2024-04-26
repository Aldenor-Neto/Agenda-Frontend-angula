import { Component, OnInit } from '@angular/core';
import { Contato } from '../contato/contato';
import { ContatoService } from '../contato/contato.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-visualizar-contato',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterLink],
  providers:[ContatoService],
  
  templateUrl: './visualizar-contato.component.html',
  styleUrl: './visualizar-contato.component.css'
})
export class VisualizarContatoComponent implements OnInit{

  constructor(private service: ContatoService, private router: Router, private route: ActivatedRoute){}

  contato: Contato={
    id:0,
    nome:"",
    telefone:"",
    email:""
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscaId(parseInt(id!)).subscribe((contato) => {
      this.contato= contato
    });
  }

}
