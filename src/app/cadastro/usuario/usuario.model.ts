import { Cidade } from "../../general/cidade.model";
import { Sexo } from "../../general/sexo.model";

export class Usuario {

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
   estabelecimentoKey: string;

   matches(another: Usuario): boolean {
      return another !== undefined &&
         another.email === this.email &&
         another.senha === this.senha
   }

}
