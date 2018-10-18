import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../agenda/agenda.service';
import { Agenda } from '../agenda/agenda.model';
import { AgendaDetailComponent } from '../agenda/agenda-detail/agenda-detail.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { LoginService } from '../sign-in/login/login.service';
import { Router } from '@angular/router';

@Component({
   selector: 'app-inicio-estabelecimento',
   templateUrl: './inicio-estabelecimento.component.html'
})
export class InicioEstabelecimentoComponent implements OnInit {

   agendas = [] as Agenda[];
   data = undefined;

   constructor(private modal: NgbModal,
               private agendaService: AgendaService, private loginService: LoginService, private router: Router) { }

   ngOnInit() {
      this.data = moment().format('DD/MM/YYYY')
      this.getAgendas()
   }

   getAgendas() {
      this.agendaService.agendasByData(this.data).then(response => this.agendas = response);
   }

   open(agenda: Agenda) {
      let modal = this.modal.open(AgendaDetailComponent);

      modal.componentInstance.agenda = agenda;
   }

   next() {
      this.data = moment(this.data, 'DD/MM/YYYY').add(1, 'days').format('DD/MM/YYYY')
      this.getAgendas()
   }

   back() {
      this.data = moment(this.data, 'DD/MM/YYYY').add(-1, 'days').format('DD/MM/YYYY')
      this.getAgendas()
   }

}
