import { Cidade } from "../../general/cidade.model";

export interface Estabelecimento {

   key: string;
   codigo: string;
   nome: string;
   telefone: string;
   cep: string;
   endereco: string;
   cidade: Cidade;
   logoPath: string;
   expedienteDe: Date;
   expedienteAte: Date;
   intervaloDe: Date;
   intervaloAte: Date;

}
