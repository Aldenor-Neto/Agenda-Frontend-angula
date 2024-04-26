import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato/contato.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contato } from '../contato/contato';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-contato',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  providers: [ContatoService],

  templateUrl: './editar-contato.component.html',
  styleUrl: './editar-contato.component.css'
})
export class EditarContatoComponent implements OnInit {

  constructor(private service: ContatoService, private router: Router, private route: ActivatedRoute) { }
   contato: Contato = {
    id: 0,
    nome: "",
    telefone: "",
    email: ""
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.service.buscaId(parseInt(id!)).subscribe((contato) => {
      this.contato = contato;
      console.log(contato);
    });
  }

  editar() {
    this.service.editar(this.contato).subscribe(() => {
      this.router.navigate(["/listar-contatos"])
    });
  }

  cancelar() {
    this.router.navigate(["/listar-contatos"]);
  }

}
