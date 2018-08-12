import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ShopProfileComponent } from './shop-profile/shop-profile.component';

export const ProfileRoutes: Routes = [
    {
        path: '',
        data: {
            breadcrumb: 'Perfil',
            status: false
        },
        children: [
            { path: 'user', component: UserProfileComponent, data: { breadcrumb: 'Usuário', status: false } },
            { path: 'shop', component: ShopProfileComponent, data: { breadcrumb: 'Salão', status: false } }
         ]
    }
];
