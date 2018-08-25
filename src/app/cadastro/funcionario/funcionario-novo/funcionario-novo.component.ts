import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationsComponent } from '../../../notifications/notifications.component';

import { Funcionario } from '../funcionario.model';
import { FuncionarioService } from '../funcionario.service';
import { TIPOS_USUARIO } from '../funcionario.tipo-usuario.model';

@Component({
   selector: 'app-funcionario-novo',
   templateUrl: './funcionario-novo.component.html'
})
export class FuncionarioNovoComponent implements OnInit {

   constructor(private funcionarioService: FuncionarioService,
      private route: ActivatedRoute,
      private router: Router,
      private notification: NotificationsComponent) { }

   private funcionario = {} as Funcionario;
   tipoUsuario = [] as string[];

   ngOnInit() {
      let route = this.route.snapshot.params['key']
      if (route != undefined) {
         this.funcionarioService.funcionarioById(route).subscribe(funcionario => this.funcionario = funcionario)
      }

      this.tipoUsuario = TIPOS_USUARIO;
   }

   salvar(f: NgForm) {
      this.funcionarioService.save(this.funcionario)
      this.notification.showSuccessMessage('Salvo com sucesso!');
      this.router.navigate(['/cadastro/funcionario']);
   }

   clear(f: NgForm) {
      this.funcionario = {} as Funcionario;
   }

}
