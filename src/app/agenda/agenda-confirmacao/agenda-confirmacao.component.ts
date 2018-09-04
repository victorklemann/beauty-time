import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationsComponent } from '../../notifications/notifications.component';

import { Agenda } from '../agenda.model';
import { AgendaService } from '../agenda.service';
import { AGENDADO } from '../status-agenda.model';
import { AgendaComponent } from '../agenda.component';

@Component({
   selector: 'app-agenda-confirmacao',
   templateUrl: './agenda-confirmacao.component.html'
})
export class AgendaConfirmacaoComponent implements OnInit {

   @Input() agenda = {} as Agenda;
   @Input() agendaComponent = {} as AgendaComponent;

   constructor(private activeModal: NgbActiveModal,
               private agendaService: AgendaService,
               private notification: NotificationsComponent) { }

   ngOnInit() {
   }

   salvar() {
      this.agenda.status = AGENDADO;
      this.agendaService.save(this.agenda);
      this.agendaComponent.changeFuncionario();
      this.notification.showSuccessMessage('Salvo com sucesso!');
      this.activeModal.dismiss();
   }

}
