export const MINUTOS = { codigo: '1', descricao: 'Minuto(s)' } as TipoDuracao;
export const HORAS = { codigo: '2', descricao: 'Hora(s)' } as TipoDuracao;

export const TIPOS_DURACAO = [ MINUTOS, HORAS ] as TipoDuracao[];

export interface TipoDuracao {

   codigo: string;
   descricao: string;

}
