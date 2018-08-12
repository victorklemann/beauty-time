import { Cidade } from "../../general/cidade.model";

export interface Estabelecimento {
    
   id: string
   nome: string
   telefone: string
   cep: string
   endereco: string
   cidade: Cidade[]
   logoPath: string
   expedienteDe: Date
   expedienteAte: Date
   intervaloDe: Date
   intervaloAte: Date

}