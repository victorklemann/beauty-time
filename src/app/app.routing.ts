import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [
   {
      path: '',
      component: AuthLayoutComponent,
      children: [
         {
            path: '',
            redirectTo: 'sign-in',
            pathMatch: 'full'
         }, {
            path: 'sign-in',
            loadChildren: './sign-in/sign-in.module#SignInModule'
         }
      ]
   }, {
      path: '',
      component: AdminLayoutComponent,
      children: [
         {
            path: 'inicio-usuario',
            loadChildren: './inicio-usuario/inicio-usuario.module#InicioUsuarioModule'
         }, {
            path: 'inicio-estabelecimento',
            loadChildren: './inicio-estabelecimento/inicio-estabelecimento.module#InicioEstabelecimentoModule'
         }, {
            path: 'cadastro',
            loadChildren: './cadastro/cadastro.module#CadastroModule'
         }, {
            path: 'profile',
            loadChildren: './profile/profile.module#ProfileModule'
         }
      ]
   }, {
      path: '**',
      redirectTo: 'error/404'
   }];
