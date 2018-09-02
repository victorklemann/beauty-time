import { Routes } from '@angular/router';

import { InicioEstabelecimentoComponent } from './inicio-estabelecimento.component';

export const InicioEstabelecimentoRoutes: Routes = [
    {
        path: '',
        component: InicioEstabelecimentoComponent,
        data: {
            breadcrumb: 'Início',
            icon: 'icofont-home bg-c-blue',
            status: false
        }
    }
];
