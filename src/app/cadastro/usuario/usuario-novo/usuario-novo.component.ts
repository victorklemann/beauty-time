import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as _ from 'underscore';

import { Usuario } from '../usuario.model';
import { Estado, ESTADOS } from '../../../general/estado.model';
import { Cidade, CIDADES } from '../../../general/cidade.model';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationsComponent } from '../../../notifications/notifications.component';

@Component({
   selector: 'app-usuario-novo',
   templateUrl: './usuario-novo.component.html'
})
export class UsuarioNovoComponent implements OnInit {

   constructor(private usuarioService: UsuarioService,
      private route: ActivatedRoute,
      private router: Router,
      private notification: NotificationsComponent) { }

   @Input() usuario = {} as Usuario
   estado: any;
   private estados = ESTADOS;
   private cidades = CIDADES;

   ngOnInit() {
      let route = this.route.snapshot.params['key']
      if (route != undefined) {
         this.usuarioService.usuarioById(route).subscribe(usuario => {
            this.usuario = usuario;
            this.estado = usuario.cidade.estado
            this.changeEstado();
         })
      }
   }

   salvar(f: NgForm) {
      this.usuarioService.save(this.usuario)
      this.notification.showSuccessMessage('Salvo com sucesso!');
      this.router.navigate(['/cadastro/usuario']);
   }

   clear(f: NgForm) {
      this.usuario = {} as Usuario;
   }

   changeEstado() {
      this.cidades = _.where(CIDADES, { estado: _.find(this.estados, { codigo: this.estado.codigo }) });
   }

   equals(estadoUm, estadoDois) {
      return estadoUm && estadoDois && estadoUm.codigo == estadoDois.codigo;
   }

}
