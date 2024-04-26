import { Routes } from '@angular/router';
import { ListarContatosComponent } from './componentes/listar-contatos/listar-contatos.component';
import { CriarContatoComponent } from './componentes/criar-contato/criar-contato.component';
import { ContatoComponent } from './componentes/contato/contato.component';
import { EditarContatoComponent } from './componentes/editar-contato/editar-contato.component';

export const routes: Routes = [
    {
        path: "listar-contatos",
        component: ListarContatosComponent
    },
    {
        path: "criar-contato",
        component: CriarContatoComponent
    },
    {
        path: "visualizar-contato/:id",
        component: ContatoComponent
    },
    {
        path: "editar-contato/:id",
        component: EditarContatoComponent
    },
    {
        path: "",
        component: ListarContatosComponent
    }
];
