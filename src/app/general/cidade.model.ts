import { Estado, SC, PR } from "./estado.model";

export const CIDADES = [
   { codigo: '1', nome: 'Jaraguá do Sul', estado: SC },
   { codigo: '2', nome: 'Toleto', estado: PR }
] as Cidade[];

export interface Cidade {
    
   codigo: string;
   nome: string;
   estado: Estado;

}