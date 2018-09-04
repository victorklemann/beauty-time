export const AGENDADO = { codigo: '1', descricao: 'Agendado' } as StatusAgenda;
export const CONFIRMADO = { codigo: '2', descricao: 'Confirmado' } as StatusAgenda;
export const ENCERRADO = { codigo: '3', descricao: 'Encerrado' } as StatusAgenda;
export const CANCELADO = { codigo: '4', descricao: 'Cancelado' } as StatusAgenda;

export interface StatusAgenda {

   codigo: string;
   descricao: string;

}