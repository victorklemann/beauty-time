import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { InicioEstabelecimentoRoutes } from './inicio-estabelecimento.routing';

import { InicioEstabelecimentoComponent } from './inicio-estabelecimento.component';

@NgModule({
   imports: [
      CommonModule,
      RouterModule.forChild(InicioEstabelecimentoRoutes),
      SharedModule
   ],
   declarations: [
      InicioEstabelecimentoComponent
   ]
})
export class InicioEstabelecimentoModule { }
