import { Cidade } from "../../general/cidade.model";

export interface Usuario {
    
   usuario: string
   nome: string
   email: string
   telefone: string
   senha: string
   cep: string
   endereco: string
   cidade: Cidade[]

}