import { Usuario } from "../usuario/usuario.model";
import { TipoUsuario } from "./funcionario.tipo-usuario.model";

export interface Funcionario {
    
   key: string;
   codigo: string;
   usuario: Usuario;
   tipoUsuario: TipoUsuario;
   expedienteDe: Date;
   expedienteAte: Date;
   intervaloDe: Date;
   intervaloAte: Date;
   servicos: string[];

}