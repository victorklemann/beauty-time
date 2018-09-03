import { Usuario } from "../cadastro/usuario/usuario.model";
import { Servico } from "../cadastro/servico/servico.model";
import { Funcionario } from "../cadastro/funcionario/funcionario.model";
import { StatusAgenda } from "./status-agenda.model";

export interface Agenda {

   key: string;

   keyCliente: string;
   cliente: Usuario;

   funcionarioKey: string;
   funcionario: Funcionario;

   servicoKey: string;
   servico: Servico;

   data: string;
   horaInicio: string;
   horaFim: string;

   status: StatusAgenda;

}
