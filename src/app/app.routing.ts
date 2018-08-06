import {Routes} from '@angular/router';

import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [{
  path: '',
  component: AdminLayoutComponent,
  children: [
    {
      path: '',
      redirectTo: 'cadastro',
      pathMatch: 'full'
    }, {
      path: 'cadastro',
      loadChildren: './cadastro/cadastro.module#CadastroModule'
    }
  ]
}, {
  path: '',
  component: AuthLayoutComponent,
  children: [
    {
      path: 'home',
      loadChildren: './home/home.module#HomeModule'
    }
  ]
}, {
  path: '**',
  redirectTo: 'error/404'
}];
