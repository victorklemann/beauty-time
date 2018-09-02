import { Routes } from '@angular/router';

import { InicioUsuarioComponent } from './inicio-usuario.component';
import { AgendaComponent } from '../agenda/agenda.component';

export const InicioUsuarioRoutes: Routes = [
    {
        path: '',
        component: InicioUsuarioComponent,
        data: {
            breadcrumb: 'Início',
            icon: 'icofont-home bg-c-blue',
            status: false
        }
    },
    {
        path: 'agenda/:key', component: AgendaComponent, data: { breadcrumb: 'Agenda', status: false }
    }
];
