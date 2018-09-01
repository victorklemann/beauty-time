import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as _ from 'underscore';

import { Estabelecimento } from './shop-profile.model';
import { ShopProfileService } from './shop-profile.service';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ESTADOS } from '../../general/estado.model';
import { CIDADES } from '../../general/cidade.model';

@Component({
   selector: 'app-shop-profile',
   templateUrl: './shop-profile.component.html'
})
export class ShopProfileComponent implements OnInit {

   @Input() estabelecimento = {} as Estabelecimento;
   estado: any;
   isEditing: boolean = false;
   activeTab: string = 'sobre';

   private estados = ESTADOS;
   private cidades = CIDADES;

   constructor(private shopProfileService: ShopProfileService,
               private notification: NotificationsComponent) {
   }

   ngOnInit() {
      this.shopProfileService.estabelecimentoById("-LLIMLPjdK6ZjSbO_CKt").subscribe(estabelecimento => {
         this.estabelecimento = estabelecimento;
         this.estado = estabelecimento.cidade.estado;
      });
   }

   salvar(f: NgForm) {
      this.shopProfileService.save(this.estabelecimento);
      this.notification.showSuccessMessage('Salvo com sucesso!');
      this.isEditing = false;
   }

   clear(f: NgForm) {
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
