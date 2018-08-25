import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CadastroRoutes } from './cadastro.routing';

import { SharedModule } from '../shared/shared.module';
import { CadastroComponent } from './cadastro.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioNovoComponent } from './usuario/usuario-novo/usuario-novo.component';
import { ServicoComponent } from './servico/servico.component';
import { ServicoNovoComponent } from './servico/servico-novo/servico-novo.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { FuncionarioNovoComponent } from './funcionario/funcionario-novo/funcionario-novo.component';

import { UsuarioService } from './usuario/usuario.service';
import { ServicoService } from './servico/servico.service';
import { FuncionarioService } from './funcionario/funcionario.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CadastroRoutes),
    SharedModule
  ],
  declarations: [
    CadastroComponent,
    UsuarioComponent,
    UsuarioNovoComponent,
    ServicoComponent,
    ServicoNovoComponent,
    FuncionarioComponent,
    FuncionarioNovoComponent
  ],
  providers: [ UsuarioService, ServicoService, FuncionarioService ]
})
export class CadastroModule { }
