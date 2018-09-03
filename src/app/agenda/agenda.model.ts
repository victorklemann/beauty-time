import { Usuario } from "../cadastro/usuario/usuario.model";
import { Funcionario } from "../cadastro/funcionario/funcionario.model";
import { Servico } from "../cadastro/servico/servico.model";
import { StatusAgenda } from "./status-agenda.model";

export interface Agenda {

   key: string;
   cliente: Usuario;
   funcionario: Funcionario;
   servico: Servico;
   data: string;
   horaInicio: string;
   horaFim: string;
   status: StatusAgenda;

}