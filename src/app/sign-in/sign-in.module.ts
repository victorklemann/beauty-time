import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { SignInRoutes } from './sign-in.routing';

import { ShopProfileService } from '../profile/shop-profile/shop-profile.service';
import { UsuarioService } from '../cadastro/usuario/usuario.service';
import { FuncionarioService } from '../cadastro/funcionario/funcionario.service';

import { ShopComponent } from './shop/shop.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './sign-in.component';
import { LoginComponent } from './login/login.component';

@NgModule({
   imports: [
      CommonModule,
      RouterModule.forChild(SignInRoutes),
      SharedModule
   ],
   declarations: [
      SignInComponent,
      ShopComponent,
      UserComponent,
      LoginComponent
   ],
   providers: [ UsuarioService ]
})
export class SignInModule { }
