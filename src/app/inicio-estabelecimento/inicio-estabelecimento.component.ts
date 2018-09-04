import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../agenda/agenda.service';
import { Agenda } from '../agenda/agenda.model';
import { AgendaDetailComponent } from '../agenda/agenda-detail/agenda-detail.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
   selector: 'app-inicio-estabelecimento',
   templateUrl: './inicio-estabelecimento.component.html'
})
export class InicioEstabelecimentoComponent implements OnInit {

   agendas = {} as Agenda[];

   constructor(private modal: NgbModal,
               private agendaService: AgendaService) { }

   ngOnInit() {
      this.agendaService.agendas().subscribe(response => this.agendas = response);
   }

   open(agenda: Agenda) {
      let modal = this.modal.open(AgendaDetailComponent);

      modal.componentInstance.agenda = agenda;
   }

}
