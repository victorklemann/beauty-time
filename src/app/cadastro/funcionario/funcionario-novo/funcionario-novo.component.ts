import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationsComponent } from '../../../notifications/notifications.component';

import { Funcionario } from '../funcionario.model';
import { FuncionarioService } from '../funcionario.service';
import { TIPOS_USUARIO, TipoUsuario } from '../funcionario.tipo-usuario.model';
import { UsuarioService } from '../../usuario/usuario.service';
import { Usuario } from '../../usuario/usuario.model';

@Component({
   selector: 'app-funcionario-novo',
   templateUrl: './funcionario-novo.component.html'
})
export class FuncionarioNovoComponent implements OnInit {

   constructor(private funcionarioService: FuncionarioService,
               private usuarioService: UsuarioService,
               private route: ActivatedRoute,
               private router: Router,
               private notification: NotificationsComponent) { }

   @Input() funcionario = {} as Funcionario;
   @Input() usuarios = [] as Usuario[];
   tipoUsuario = [] as TipoUsuario[];

   ngOnInit() {
      let route = this.route.snapshot.params['key']
      if (route != undefined) {
         this.funcionarioService.funcionarioById(route).subscribe(funcionario => this.funcionario = funcionario)
      }

      this.usuarioService.usuarios().subscribe(usuarios => this.usuarios = usuarios);
      this.tipoUsuario = TIPOS_USUARIO;
   }

   salvar() {
      this.funcionarioService.save(this.funcionario)
      this.notification.showSuccessMessage('Salvo com sucesso!');
      this.router.navigate(['/cadastro/funcionario']);
   }

   clear() {
      this.funcionario = {} as Funcionario;
   }

   equals(usuarioUm, usuarioDois) {
      return usuarioUm && usuarioDois && usuarioUm.codigo == usuarioDois.codigo;
   }

}
