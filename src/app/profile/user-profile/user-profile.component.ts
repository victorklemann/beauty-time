import { Component, OnInit, Input } from '@angular/core';
import { NotificationsComponent } from '../../notifications/notifications.component';
import * as _ from 'underscore';

import { Usuario } from '../../cadastro/usuario/usuario.model';
import { UsuarioService } from '../../cadastro/usuario/usuario.service';
import { Estado, ESTADOS } from '../../general/estado.model';
import { CIDADES } from '../../general/cidade.model';
import { SEXOS } from '../../general/sexo.model';

@Component({
   selector: 'app-user-profile',
   templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit {

   @Input() usuario = {} as Usuario;
   estado: Estado;
   isEditing: boolean = false;

   private estados = ESTADOS;
   private cidades = CIDADES;
   private sexos = SEXOS;

   constructor(private usuarioService: UsuarioService,
               private notification: NotificationsComponent) { }

   ngOnInit() {
      this.usuarioService.usuarioById("-LKi0yDd7Eyiqi8I3xqb").subscribe(usuario => {
         this.usuario = usuario;
         this.estado = usuario.cidade.estado;
      });
   }

   salvar() {
      this.usuarioService.save(this.usuario);
      this.notification.showSuccessMessage('Salvo com sucesso!');
      this.isEditing = false;
   }

   clear() {
      this.usuarioService.usuarioById("-LKi0yDd7Eyiqi8I3xqb").subscribe(usuario => this.usuario = usuario);
      this.changeEditing();
   }

   changeEstado() {
      this.cidades = _.where(CIDADES, { estado: _.find(this.estados, { codigo: this.estado.codigo }) });
   }

   changeEditing() {
      this.isEditing = !this.isEditing;
   }

   equals(estadoUm, estadoDois) {
      return estadoUm && estadoDois && estadoUm.codigo == estadoDois.codigo;
   }

}
