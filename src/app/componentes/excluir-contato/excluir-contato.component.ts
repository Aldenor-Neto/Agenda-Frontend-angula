import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato/contato.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Contato } from '../contato/contato';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-excluir-contato',
  standalone: true,
  imports: [RouterLink, HttpClientModule, CommonModule],
  providers:[ContatoService],

  templateUrl: './excluir-contato.component.html',
  styleUrl: './excluir-contato.component.css'
})
export class ExcluirContatoComponent implements OnInit{

constructor(private service: ContatoService, private router: Router, private rout: ActivatedRoute){}

contato: Contato={
  id:0,
  nome:"",
  telefone:"",
  email:""
}

  ngOnInit(): void {
    const id = this.rout.snapshot.paramMap.get('id');
    this.service.buscaId(parseInt(id!)).subscribe((contato) => {
      this.contato= contato
    });
  }

  excluirContato() {
    if (this.contato.id) {
      this.service.excluir(this.contato.id).subscribe(() => {
        this.router.navigate(["/listar-contatos"])
      })
    }
  }

  cancelar() {
    this.router.navigate(["/listar-contatos"]);
  }

}
