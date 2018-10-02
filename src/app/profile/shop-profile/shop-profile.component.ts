import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'underscore';

import { Estabelecimento } from './shop-profile.model';
import { ShopProfileService } from './shop-profile.service';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ESTADOS, Estado } from '../../general/estado.model';
import { CIDADES } from '../../general/cidade.model';
import { LoginService } from '../../sign-in/login/login.service';

@Component({
   selector: 'app-shop-profile',
   templateUrl: './shop-profile.component.html'
})
export class ShopProfileComponent implements OnInit {

   estabelecimento = {} as Estabelecimento;
   estado: Estado;
   isEditing: boolean = false;
   activeTab: string = 'sobre';

   private estados = ESTADOS;
   private cidades = CIDADES;

   constructor(private shopProfileService: ShopProfileService,
               private loginService: LoginService,
               private notification: NotificationsComponent) {
   }

   ngOnInit() {
      // this.estabelecimento = this.loginService.estabelecimento;
      console.log(this.loginService);

      // if (this.estabelecimento.cidade !== null && this.estabelecimento.cidade.estado !== null) {
      //    this.estado = this.estabelecimento.cidade.estado;
      // }
   }

   salvar() {
      this.shopProfileService.save(this.estabelecimento);
      this.notification.showSuccessMessage('Salvo com sucesso!');
      this.isEditing = false;
   }

   clear() {
      this.shopProfileService.estabelecimentoById("-LLIMLPjdK6ZjSbO_CKt").subscribe(estabelecimento =>this.estabelecimento = estabelecimento);
      this.changeEditing();
   }

   changeEstado() {
      this.cidades = _.where(CIDADES, { estado: _.find(this.estados, { codigo: this.estado.codigo }) });
   }

   changeActiveTab(activeTab) {
      this.activeTab = activeTab;
   }

   changeEditing() {
      this.isEditing = !this.isEditing;
   }

   equals(estadoUm, estadoDois) {
      return estadoUm && estadoDois && estadoUm.codigo == estadoDois.codigo;
   }

}
