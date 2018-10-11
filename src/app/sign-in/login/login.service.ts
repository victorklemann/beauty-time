import { Injectable } from '@angular/core'

import 'rxjs/add/operator/do'
import * as _ from 'underscore'
import { Observable } from 'rxjs/Observable'
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Usuario } from '../../cadastro/usuario/usuario.model';
import { Estabelecimento } from '../../profile/shop-profile/shop-profile.model';
import { error } from 'protractor';
import { reject } from 'q';

@Injectable()
export class LoginService {

   private user: Usuario
   private estabelecimento: Estabelecimento

   path: string = 'usuarios'
   list: AngularFireList<Usuario[]>

   constructor(private afd: AngularFireDatabase) {
      let currentUser = JSON.parse(sessionStorage.getItem('currentUser'))
      if (currentUser !== undefined) {
         this.setUser(currentUser)
      }

      let currentShop = JSON.parse(sessionStorage.getItem('currentShop'))
      if (currentShop !== undefined) {
         this.setEstabelecimento(currentShop)
      }
   }

   isLoggedIn(): boolean {
      return this.user !== undefined
   }

   authentication(usuario: string, senha: string): Promise<any> {
      this.user = undefined
      this.estabelecimento = undefined
      return new Promise((ok, r) => {
         this.afd.list(`/${this.path}`, ref => ref.orderByChild('usuario').equalTo(usuario)).snapshotChanges().subscribe(a => {
            ok(a)
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

}
