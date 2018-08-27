import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Servico } from '../servico.model';
import { ServicoService } from '../servico.service';
import { TIPOS_DURACAO, TipoDuracao } from '../servico.tipo-duracao.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationsComponent } from '../../../notifications/notifications.component';

@Component({
   selector: 'app-servico-novo',
   templateUrl: './servico-novo.component.html'
})
export class ServicoNovoComponent implements OnInit {

   constructor(private servicoService: ServicoService,
      private route: ActivatedRoute,
      private router: Router,
      private notification: NotificationsComponent) { }

   private servico = {} as Servico;
   tiposDuracao = [] as TipoDuracao[];

   ngOnInit() {
      this.tiposDuracao = TIPOS_DURACAO;

      let route = this.route.snapshot.params['key']
      if (route != undefined) {
         this.servicoService.servicoById(route).subscribe(servico => this.servico = servico)
      }
      
   }

   salvar(f: NgForm) {      
      this.servicoService.save(this.servico)
      this.notification.showSuccessMessage('Salvo com sucesso!');
      this.router.navigate(['/cadastro/servico']);
   }

   clear(f: NgForm) {
      this.servico = {} as Servico;
   }

   equals(tipoDuracaoUm, tipoDuracaoDois) {
      return tipoDuracaoUm && tipoDuracaoDois && tipoDuracaoUm.codigo == tipoDuracaoDois.codigo;
   }

}
