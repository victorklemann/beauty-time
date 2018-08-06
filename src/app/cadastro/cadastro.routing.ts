import { Routes } from '@angular/router';

import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioNovoComponent } from './usuario/usuario-novo/usuario-novo.component';

import { ServicoComponent } from './servico/servico.component';
import { ServicoNovoComponent } from './servico/servico-novo/servico-novo.component';

export const CadastroRoutes: Routes = [
    {
        path: '',
        data: {
            breadcrumb: 'Cadastro',
            status: false
        },
        children: [
            { path: 'usuario', component: UsuarioComponent, data: { breadcrumb: 'Usuário', status: false } },
            { path: 'usuario/novo', component: UsuarioNovoComponent, data: { breadcrumb: 'Usuário', status: false } },
            { path: 'servico', component: ServicoComponent, data: { breadcrumb: 'Serviço', status: false } },
            { path: 'servico/novo', component: ServicoNovoComponent, data: { breadcrumb: 'Serviço', status: false } },
        ]
    }
];
