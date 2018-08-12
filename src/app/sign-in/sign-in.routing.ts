import { Routes } from '@angular/router';

import { ShopComponent } from './shop/shop.component';
import { UserComponent } from './user/user.component';

export const SignInRoutes: Routes = [
    {
        path: '',
        data: {
            breadcrumb: 'Sign in',
            status: false
        },
        children: [
            { path: 'shop', component: ShopComponent, data: { breadcrumb: 'Salão', status: false } },
            { path: 'user', component: UserComponent, data: { breadcrumb: 'Usuário', status: false } }
        ]
    }
];
