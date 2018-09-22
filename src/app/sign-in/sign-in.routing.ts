import { Routes } from '@angular/router';

import { ShopComponent } from './shop/shop.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './sign-in.component';
import { LoginComponent } from './login/login.component';

export const SignInRoutes: Routes = [
    {
      path: '',
      children: [
         {
            path: '',
            component: SignInComponent
         },
         {
            path: 'shop',
            component: ShopComponent
         }, {
            path: 'user',
            component: UserComponent
         }, {
            path: 'login',
            component: LoginComponent
         }
      ]
   }
];
