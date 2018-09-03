import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Agenda } from '../agenda.model';
import { AgendaService } from '../agenda.service';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { Router } from '@angular/router';
import { AGENDADO } from '../status-agenda.model';

@Component({
   selector: 'app-agenda-confirmacao',
   templateUrl: './agenda-confirmacao.component.html'
})
export class AgendaConfirmacaoComponent implements OnInit {

   @Input() agenda = {} as Agenda;

   constructor(private activeModal: NgbActiveModal,
               private router: Router,
               private agendaService: AgendaService,
               private notification: NotificationsComponent) { }

   ngOnInit() {
   }

   salvar() {
      this.agenda.status = AGENDADO;
      this.agendaService.save(this.agenda)
      this.notification.showSuccessMessage('Salvo com sucesso!');
      this.activeModal.dismiss();
   }

}
