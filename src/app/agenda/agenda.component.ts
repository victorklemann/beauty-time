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
      this.refreshFuncionarios();
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

      let agendasFuncionario = [];
      let funcionario = this.agenda.funcionario;

      this.agendaService.agendasByFuncionario(funcionario.key).subscribe(response => agendasFuncionario = response);

      let horarioInicio = moment(funcionario.expedienteDe, 'HH:mm');
      let horarioFim = moment(funcionario.expedienteAte, 'HH:mm');
      while (horarioInicio.isSameOrBefore(horarioFim)) {
         let agenda = _.find(this.allAgendas, { horaInicio: horarioInicio.format('HH:mm'),
                                                funcionarioKey: funcionario.key }) as Agenda;

         if (agenda === undefined) {
            agenda = {} as Agenda;
            agenda.horaInicio = horarioInicio.format('HH:mm');
         }


         if (horarioInicio.isSameOrAfter(moment(funcionario.intervaloDe, 'HH:mm')) && horarioInicio.isBefore(moment(funcionario.intervaloAte, 'HH:mm'))) {
            horarioInicio = horarioInicio.add(30, 'minutes');
            continue;
         } else {
            this.agendas.push(agenda);
         }
         horarioInicio = horarioInicio.add(30, 'minutes');
      }
   }

   open(horario: string) {
      let modal = this.modal.open(AgendaConfirmacaoComponent);

      this.agenda.data = this.data;

      let servico = _.findWhere(this.servicos, {key: this.agenda.servico.key})

      let hora = moment(horario, 'HH:mm');
      let horaInicio = hora.format('HH:mm');
      let horaFim = hora.add(servico.duracao, 'minutes').format('HH:mm');

      this.agenda.servicoKey = this.agenda.servico.key;
      this.agenda.funcionarioKey = this.agenda.funcionario.key;
      this.agenda.horaInicio = horaInicio;
      this.agenda.horaFim = horaFim;
      modal.componentInstance.agenda = this.agenda;
      modal.componentInstance.agendaComponent = this;
   }

   refreshFuncionarios() {
      this.funcionarioService.funcionarios().subscribe(funcionarios => this.allFuncionarios = funcionarios);
   }

}
