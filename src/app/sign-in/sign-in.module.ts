import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SignInRoutes } from './sign-in.routing';

import { SharedModule } from '../shared/shared.module';

import { ShopComponent } from './shop/shop.component';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SignInRoutes),
    SharedModule
  ],
  declarations: [
    ShopComponent,
    UserComponent
  ]
})
export class SignInModule { }
