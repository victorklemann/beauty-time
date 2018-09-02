import {Injectable} from '@angular/core';

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

const MENUITEMS = [
  {
    label: 'Layout',
    main: [
      {
        state: 'sign-in',
        name: 'Usuario',
        type: 'link',
        icon: 'ti-home',
        target: true
      },
      {
        state: 'inicio-usuario',
        name: 'Home',
        type: 'link',
        icon: 'ti-home'
      },
      {
        state: 'cadastro',
        name: 'Cadastros',
        type: 'sub',
        icon: 'ti-layout-grid2-alt',
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

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}
