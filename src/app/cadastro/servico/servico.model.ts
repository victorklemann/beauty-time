import { TipoDuracao } from "./servico.tipo-duracao.model";

export interface Servico {
    
   key: string;
   codigo: string;
   nome: string;
   ativo: boolean;
   descricao: string;
   preco: number;
   duracao: number;
   tipoDuracao: TipoDuracao;

}