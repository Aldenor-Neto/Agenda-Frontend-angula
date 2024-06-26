import { Routes } from '@angular/router';
import { ListarContatosComponent } from './componentes/listar-contatos/listar-contatos.component';
import { CriarContatoComponent } from './componentes/criar-contato/criar-contato.component';
import { ContatoComponent } from './componentes/contato/contato.component';
import { EditarContatoComponent } from './componentes/editar-contato/editar-contato.component';
import { ExcluirContatoComponent } from './componentes/excluir-contato/excluir-contato.component';
import { VisualizarContatoComponent } from './componentes/visualizar-contato/visualizar-contato.component';

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
        path: "excluir-contato/:id",
        component: ExcluirContatoComponent
    },
    {
        path: "editar-contato/:id",
        component: EditarContatoComponent
    },
    {
        path: "visualizar-contato/:id",
        component: VisualizarContatoComponent
    },
    {
        path: "",
        component: ListarContatosComponent
    }
];
