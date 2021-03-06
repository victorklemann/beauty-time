import { Injectable } from '@angular/core'

import * as _ from 'underscore'
import { Observable } from 'rxjs/Observable'
import { Funcionario } from './funcionario.model';
import { DataBaseService } from '../../general/database.service';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { reject } from 'q';

@Injectable()
export class FuncionarioService {

   path: string = 'funcionarios'
   list: AngularFireList<Funcionario[]>

   constructor(private afd: AngularFireDatabase, private dbService: DataBaseService) {
      this.refresh()
   }

   refresh() {
      this.list = this.afd.list(this.path)
   }

   save(funcionario: Funcionario) {
      this.dbService.save(this.list, funcionario)
   }

   delete(keyFuncionario: string) {
      this.dbService.delete(this.list, keyFuncionario)
   }

   funcionarios() {
      return this.dbService.list(this.list);
   }

   funcionarioById(key: string): Observable<Funcionario> {
      return this.dbService.objectById(this.afd.object(`/${this.path}/${key}`))
   }

   funcionarioByUsuario(keyUsuario: string): Promise<any> {
      return new Promise((ok, r) => {
         this.afd.list(`/${this.path}`, ref => ref.orderByChild('usuarioKey').equalTo(keyUsuario)).snapshotChanges().subscribe(a => {
            a.map(action => {
               ok(_.extend(action.payload.val(), { key: action.payload.key }))
            })
         }, error => {
            reject(error)
         })
      })
   }

}
