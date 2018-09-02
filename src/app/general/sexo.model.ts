export const MASCULINO = { codigo: '1', descricao: 'Masculino' } as Sexo;
export const FEMININO = { codigo: '2', descricao: 'Feminino' } as Sexo;

export const SEXOS = [ MASCULINO, FEMININO ] as Sexo[];

export interface Sexo {
   
   codigo: string;
   descricao: string;

}