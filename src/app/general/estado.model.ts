export const PR = { codigo: '1', nome: 'Paraná', sigla: 'PR' } as Estado;
export const SC = { codigo: '2', nome: 'Santa Catarina', sigla: 'SC' } as Estado;

export const ESTADOS = [ PR, SC ] as Estado[];

export interface Estado {
    
   codigo: string
   nome: string
   sigla: string

}