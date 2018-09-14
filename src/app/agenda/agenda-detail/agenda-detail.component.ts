import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Agenda } from '../agenda.model';
import { CONFIRMADO } from '../status-agenda.model';
import { AgendaService } from '../agenda.service';
import { NotificationsComponent } from '../../notifications/notifications.component';

@Component({
  selector: 'app-agenda-detail',
  templateUrl: './agenda-detail.component.html'
})
export class AgendaDetailComponent implements OnInit {

  @Input() agenda = {} as Agenda;

  constructor(private activeModal: NgbActiveModal,
              private agendaService: AgendaService,
              private notification: NotificationsComponent) { }

  ngOnInit() {
  }

  salvar() {
   this.agenda.status = CONFIRMADO;
   this.agendaService.save(this.agenda);
   this.notification.showSuccessMessage('Salvo com sucesso!');
   this.activeModal.dismiss();
  }

}
