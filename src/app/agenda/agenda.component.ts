import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import * as _ from 'underscore';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AgendaConfirmacaoComponent } from './agenda-confirmacao/agenda-confirmacao.component';
import { ServicoService } from '../cadastro/servico/servico.service';
import { FuncionarioService } from '../cadastro/funcionario/funcionario.service';
import { Servico } from '../cadastro/servico/servico.model';
import { Funcionario } from '../cadastro/funcionario/funcionario.model';
import { Agenda } from './agenda.model';
import { AgendaService } from './agenda.service';
import { AGENDADO } from './status-agenda.model';

@Component({
   selector: 'app-agenda',
   templateUrl: './agenda.component.html'
})
export class AgendaComponent implements OnInit {

   agenda = {} as Agenda;
   allAgendas = [] as Agenda[];
   agendas = [] as Agenda[];

   servicos = [] as Servico[];

   allFuncionarios = [] as Funcionario[];
   funcionarios = [] as Funcionario[];

   data: string;
   diaSemana: string;

   constructor(private modal: NgbModal,
               private servicoService: ServicoService,
               private funcionarioService: FuncionarioService,
               private agendaService: AgendaService) { }

   ngOnInit() {
      this.servicoService.servicos().subscribe(servicos => this.servicos = servicos);
      this.funcionarioService.funcionarios().subscribe(funcionarios => this.allFuncionarios = funcionarios);
      this.agendaService.agendas().subscribe(agendas => this.allAgendas = agendas);

      let dataAtual = moment();
      this.data = dataAtual.format('DD/MM/YYYY');
      this.diaSemana = dataAtual.format('dddd');
   }

   changeServico() {
      this.funcionarios = [];
      
      for (let index in this.allFuncionarios) {
         let funcionario = this.allFuncionarios[index];
         let servico = _.find(funcionario.servicos, { key: this.agenda.servico.key, ativo: true });
         if (servico !== undefined) {
            this.funcionarios.push(funcionario);
         }
      }
   }

   changeFuncionario() {
      this.agendas = [];

      // console.log(_.find(this.allFuncionarios, { key: this.agenda.funcionario.key}));
      console.log(_.find(this.allAgendas, { funcionario: _.find(this.allFuncionarios, { key: this.agenda.funcionario.key})  }));
      // console.log(this.agenda.funcionario.key);
      
      
      // let agendasFuncionario = _.find(this.allAgendas, { "funcionario.key": this.agenda.funcionario.key });
      // console.log(agendasFuncionario);
      
      // let horario = moment('08:30', 'HH:mm');
      // for (let index = 0; index < 21; index++) {
      //    let agenda = _.find(this.allAgendas, { horaInicio: horario.format('HH:mm'), 
      //                                           funcionario: _.find(this.allFuncionarios, { key: this.agenda.funcionario.key })
      //                                           }) as Agenda;
      //    // console.log(horario.format('HH:mm'));
      //    // console.log(this.allAgendas);
      //    // console.log(_.find(this.allFuncionarios, { key: this.agenda.funcionario.key }));         
      //    console.log(_.find(this.allAgendas, { funcionario: funcionario }));
      //    console.log(agenda.funcionario == _.find(this.allFuncionarios, { key: this.agenda.funcionario.key }));
         
                                   
      //    if (agenda === undefined) {
      //       agenda = {} as Agenda;
      //       agenda.horaInicio = horario.format('HH:mm');
      //    }
      //    this.agendas.push(agenda);

      //    horario = horario.add(30, 'minutes');
      // }

      // console.log(this.agendas);
      
   }

   open(horario: string) {
      let modal = this.modal.open(AgendaConfirmacaoComponent);
      this.agenda.data = this.data;

      let hora = moment(horario, 'HH:mm');
      let horaInicio = hora.format('HH:mm');
      let horaFim = hora.add(this.agenda.servico.duracao, 'minutes').format('HH:mm');

      this.agenda.horaInicio = horaInicio;
      this.agenda.horaFim = horaFim;
      modal.componentInstance.agenda = this.agenda;
   }

}
