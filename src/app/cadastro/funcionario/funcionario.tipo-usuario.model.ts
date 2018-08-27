const FUNCIONARIO = { codigo: '1', descricao: 'Funcionário' } as TipoUsuario;
const ADMINISTRADOR = { codigo: '2', descricao: 'Administrador' } as TipoUsuario;

export const TIPOS_USUARIO = [ FUNCIONARIO, ADMINISTRADOR ];

export interface TipoUsuario {

   codigo: string;
   descricao: string;

}