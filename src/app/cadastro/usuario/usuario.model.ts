import { Cidade } from "../../general/cidade.model";

export interface Usuario {
    
   key: string
   usuario: string
   nome: string
   email: string
   telefone: string
   senha: string
   cep: string
   endereco: string
   cidade: Cidade[]

}