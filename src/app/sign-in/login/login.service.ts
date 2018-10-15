import { Injectable } from '@angular/core'

import 'rxjs/add/operator/do'
import * as _ from 'underscore'
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Usuario } from '../../cadastro/usuario/usuario.model';
import { Estabelecimento } from '../../profile/shop-profile/shop-profile.model';
import { reject } from 'q';
import { ShopProfileService } from '../../profile/shop-profile/shop-profile.service';
import { FuncionarioService } from '../../cadastro/funcionario/funcionario.service';
import { Funcionario } from '../../cadastro/funcionario/funcionario.model';

@Injectable()
export class LoginService {

   private user: Usuario
   private funcionario: Funcionario
   private estabelecimento: Estabelecimento

   path: string = 'usuarios'
   list: AngularFireList<Usuario[]>

   constructor(private afd: AngularFireDatabase,
      private estabelecimentoService: ShopProfileService,
      private funcionarioService: FuncionarioService) {
      let currentUser = JSON.parse(sessionStorage.getItem('currentUser'))
      if (currentUser !== undefined) {
         this.setUser(currentUser)
      }

      let currentShop = JSON.parse(sessionStorage.getItem('currentShop'))
      if (currentShop !== undefined) {
         this.setEstabelecimento(currentShop)
      }

      let currentFuncionario = JSON.parse(sessionStorage.getItem('currentFuncionario'))
      if (currentFuncionario !== undefined) {
         this.setFuncionario(currentFuncionario)
      }
   }

   isLoggedIn(): boolean {
      return this.getUser() !== undefined
   }

   authentication(usuario: string, senha: string): Promise<any> {
      this.user = undefined
      this.estabelecimento = undefined
      return new Promise((ok, r) => {
         this.afd.list(`/${this.path}`, ref => ref.orderByChild('usuario').equalTo(usuario)).snapshotChanges().subscribe(a => {
            ok(
               a.map(action => {
                  let user = action.payload.val()
                  if (user !== undefined) {
                     if (user.senha === senha) {
                        this.setUser(_.extend(action.payload.val(), { key: action.payload.key }))
                        if (user.estabelecimentoKey !== null) {
                           this.estabelecimentoService.estabelecimentoById(user.estabelecimentoKey).subscribe(estabelecimento => {
                              this.setEstabelecimento(estabelecimento)
                           })
                        }

                        this.funcionarioService.funcionarioByUsuario(this.getUser().key).then(funcionario => {
                           this.setFuncionario(funcionario)
                        })
                     }
                  }
               })
            )
         }, error => {
            reject(error)
         })
      })
   }

   exit() {
      this.user = undefined
      sessionStorage.removeItem('currentUser')

      this.estabelecimento = undefined
      sessionStorage.removeItem('currentShop')

      this.funcionario = undefined
      sessionStorage.removeItem('currentFuncionario')
   }

   setUser(user: Usuario) {
      this.user = user
      sessionStorage.setItem('currentUser', JSON.stringify(this.user))
   }

   getUser(): Usuario {
      return this.user
   }

   setEstabelecimento(estabelecimento: Estabelecimento) {
      this.estabelecimento = estabelecimento
      sessionStorage.setItem('currentShop', JSON.stringify(this.estabelecimento))
   }

   getEstabelecimento(): Estabelecimento {
      return this.estabelecimento
   }

   setFuncionario(funcionario: Funcionario) {
      this.funcionario = funcionario
      sessionStorage.setItem('currentFuncionario', JSON.stringify(this.funcionario))
   }

   getFuncionario(): Funcionario {
      return this.funcionario
   }

}
