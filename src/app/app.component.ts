import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CriarContatoComponent } from './componentes/criar-contato/criar-contato.component';
import { EditarContatoComponent } from './componentes/editar-contato/editar-contato.component';
import { ListarContatosComponent } from './componentes/listar-contatos/listar-contatos.component';
import { CabecarioComponent } from './componentes/cabecario/cabecario.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CriarContatoComponent, EditarContatoComponent, ListarContatosComponent, CabecarioComponent, RodapeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'agenda';
}
