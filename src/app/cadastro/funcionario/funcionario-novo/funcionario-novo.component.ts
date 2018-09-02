import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationsComponent } from '../../../notifications/notifications.component';
import * as _ from 'underscore';

import { Funcionario } from '../funcionario.model';
import { FuncionarioService } from '../funcionario.service';
import { TIPOS_USUARIO, TipoUsuario } from '../funcionario.tipo-usuario.model';
import { UsuarioService } from '../../usuario/usuario.service';
import { Usuario } from '../../usuario/usuario.model';
import { ServicoService } from '../../servico/servico.service';
import { Servico } from '../../servico/servico.model';
import { NgForm } from '@angular/forms';

@Component({
   selector: 'app-funcionario-novo',
   templateUrl: './funcionario-novo.component.html'
})
export class FuncionarioNovoComponent implements OnInit {

   constructor(private funcionarioService: FuncionarioService,
               private usuarioService: UsuarioService,
               private servicoService: ServicoService,
               private route: ActivatedRoute,
               private router: Router,
               private notification: NotificationsComponent) { }

   @Input() funcionario = {} as Funcionario;
   @Input() usuarios = [] as Usuario[];
   tipoUsuario = [] as TipoUsuario[];
   servicos = [] as Servico[];

   ngOnInit() {
      this.servicoService.servicos().subscribe(servicos => this.servicos = servicos);

      let route = this.route.snapshot.params['key']
      if (route != undefined) {
         this.funcionarioService.funcionarioById(route).subscribe(funcionario => {
            this.funcionario = funcionario;
            if (this.funcionario.servicos !== undefined) {
               this.servicos = this.funcionario.servicos;
            }
         });     
      }
      
      this.usuarioService.usuarios().subscribe(usuarios => this.usuarios = usuarios);
      this.tipoUsuario = TIPOS_USUARIO;
   }

   salvar() {
      this.funcionario.servicos = this.servicos;
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
