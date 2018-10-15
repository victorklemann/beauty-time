import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { InicioEstabelecimentoRoutes } from './inicio-estabelecimento.routing';

import { InicioEstabelecimentoComponent } from './inicio-estabelecimento.component';
import { AgendaService } from '../agenda/agenda.service';
import { AgendaDetailComponent } from '../agenda/agenda-detail/agenda-detail.component';

@NgModule({
   imports: [
      CommonModule,
      RouterModule.forChild(InicioEstabelecimentoRoutes),
      SharedModule
   ],
   declarations: [
      InicioEstabelecimentoComponent,
      AgendaDetailComponent
   ],
   providers: [
      AgendaService
   ],
   entryComponents: [
      AgendaDetailComponent
   ]
})
export class InicioEstabelecimentoModule { }
