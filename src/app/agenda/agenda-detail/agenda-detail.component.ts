import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Agenda } from '../agenda.model';

@Component({
  selector: 'app-agenda-detail',
  templateUrl: './agenda-detail.component.html'
})
export class AgendaDetailComponent implements OnInit {

  @Input() agenda = {} as Agenda;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
