import { Injectable, Input } from '@angular/core'

import 'rxjs/add/operator/do'
import * as _ from 'underscore'
import { Observable } from 'rxjs/Observable'
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Usuario } from '../../cadastro/usuario/usuario.model';
import { Estabelecimento } from '../../profile/shop-profile/shop-profile.model';

@Injectable()
export class LoginService {

   user: Usuario
   estabelecimento: Estabelecimento

   path: string = 'usuarios'
   list: AngularFireList<Usuario[]>

   constructor(private afd: AngularFireDatabase) {
   }

   isLoggedIn(): boolean {
      return this.user !== undefined
   }

   authentication(usuario: string, senha: string): Observable<any> {
      this.user = undefined
      this.estabelecimento = undefined
      return this.afd.list(`/${this.path}`, ref => ref.orderByChild('usuario').equalTo(usuario)).snapshotChanges()
   }

}
