import { Injectable } from '@angular/core';
import { LoginService } from '../../sign-in/login/login.service';

export interface BadgeItem {
   type: string;
   value: string;
}

export interface ChildrenItems {
   state: string;
   target?: boolean;
   name: string;
   type?: string;
   children?: ChildrenItems[];
}

export interface MainMenuItems {
   state: string;
   main_state?: string;
   target?: boolean;
   name: string;
   type: string;
   icon: string;
   badge?: BadgeItem[];
   children?: ChildrenItems[];
}

export interface Menu {
   label: string;
   main: MainMenuItems[];
}

const MENUITEMS_ESTABELECIMENTO = [
   {
      label: 'Layout',
      main: [
         {
            state: 'inicio-estabelecimento',
            name: 'Home',
            type: 'link',
            icon: 'ti-home'
         },
         {
            state: 'cadastro',
            name: 'Cadastros',
            type: 'sub',
            icon: 'ti ti-clipboard',
            children: [
               {
                  state: 'usuario',
                  name: 'Usuários'
               },
               {
                  state: 'servico',
                  name: 'Serviços'
               },
               {
                  state: 'funcionario',
                  name: 'Funcionários'
               }
            ]
         }
      ]
   }
];

const MENUITEMS_CLIENTE = [
   {
      label: 'Layout',
      main: [
         {
            state: 'inicio-usuario',
            name: 'Home',
            type: 'link',
            icon: 'ti-home'
         }
      ]
   }
];

@Injectable()
export class MenuItems {

   constructor(private usuarioService : LoginService) {
   }

   getAll(): Menu[] {
      let estabelecimento = this.usuarioService.getEstabelecimento()
      let funcionario = this.usuarioService.getFuncionario()
      if ((estabelecimento !== undefined && estabelecimento !== null)
                  || (funcionario !== undefined && funcionario !== null)) return MENUITEMS_ESTABELECIMENTO;
      return MENUITEMS_CLIENTE;
   }
}
