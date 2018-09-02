import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { InicioUsuarioRoutes } from './inicio-usuario.routing';

import { InicioUsuarioComponent } from './inicio-usuario.component';
import { AgendaComponent } from '../agenda/agenda.component';
import { ShopProfileService } from '../profile/shop-profile/shop-profile.service';

@NgModule({
   imports: [
      CommonModule,
      RouterModule.forChild(InicioUsuarioRoutes),
      SharedModule
   ],
   declarations: [
      InicioUsuarioComponent,
      AgendaComponent
   ],
   providers: [ ShopProfileService ]
})
export class InicioUsuarioModule { }
