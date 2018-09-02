import { Cidade } from "../../general/cidade.model";
import { Sexo } from "../../general/sexo.model";

export interface Usuario {

   key: string;
   usuario: string;
   nome: string;
   sexo: Sexo;
   email: string;
   telefone: string;
   senha: string;
   cep: string;
   endereco: string;
   cidade: Cidade;

}
