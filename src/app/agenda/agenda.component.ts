import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
   selector: 'app-agenda',
   templateUrl: './agenda.component.html'
})
export class AgendaComponent implements OnInit {

   horarios: string[] = [];

   constructor() { }

   ngOnInit() {
      let horario = moment('08:30', 'HH:mm');
      for (let index = 0; index < 21; index++) {
         this.horarios.push(horario.format('HH:mm'));
         horario = horario.add(30, 'minutes');
      }
   }

}
