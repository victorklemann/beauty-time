import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Usuario } from '../usuario.model';
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

   private usuario = {} as Usuario

   ngOnInit() {
      let route = this.route.snapshot.params['key']
      if (route != undefined) {
         this.usuarioService.usuarioById(route).subscribe(usuario => this.usuario = usuario)
      }
   }

   salvar(f: NgForm) {
      this.usuarioService.save(this.usuario)
      this.notification.showSuccessMessage('SHOW');
      this.router.navigate(['/cadastro/usuario']);
   }

}
