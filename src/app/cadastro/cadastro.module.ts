import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CadastroRoutes } from './cadastro.routing';

import { SharedModule } from '../shared/shared.module';
import { CadastroComponent } from './cadastro.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioNovoComponent } from './usuario/usuario-novo/usuario-novo.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CadastroRoutes),
    SharedModule
  ],
  declarations: [
    CadastroComponent,
    UsuarioComponent,
    UsuarioNovoComponent
  ]
})
export class CadastroModule { }
