import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { InicioUsuarioRoutes } from './inicio-usuario.routing';

import { InicioUsuarioComponent } from './inicio-usuario.component';
import { AgendaComponent } from '../agenda/agenda.component';
import { ShopProfileService } from '../profile/shop-profile/shop-profile.service';
import { AgendaConfirmacaoComponent } from '../agenda/agenda-confirmacao/agenda-confirmacao.component';
import { ServicoService } from '../cadastro/servico/servico.service';
import { FuncionarioService } from '../cadastro/funcionario/funcionario.service';
import { AgendaService } from '../agenda/agenda.service';

@NgModule({
   imports: [
      CommonModule,
      RouterModule.forChild(InicioUsuarioRoutes),
      SharedModule
   ],
   declarations: [
      InicioUsuarioComponent,
      AgendaComponent,
      AgendaConfirmacaoComponent
   ],
   providers: [ 
      ShopProfileService, ServicoService, FuncionarioService, NgbActiveModal, AgendaService
   ],
   entryComponents: [
      AgendaConfirmacaoComponent
   ]
})
export class InicioUsuarioModule { }
