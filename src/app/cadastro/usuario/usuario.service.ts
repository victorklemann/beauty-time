import { Injectable } from '@angular/core'

import { Observable } from 'rxjs/Observable'
import { Usuario } from './usuario.model';
import { DataBaseService } from '../../general/database.service';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class UsuarioService {

   path: string = 'usuarios'
   list: AngularFireList<Usuario[]>

   constructor(private afd: AngularFireDatabase, private dbService: DataBaseService) {
      this.refresh()
   }

   refresh() {
      this.list = this.afd.list(this.path)
   }

   save(usuario: Usuario): Observable<Usuario> {
      return this.dbService.save(this.list, usuario)
   }

   delete(keyUsuario: string) {
      this.dbService.delete(this.list, keyUsuario)
   }

   usuarios() {
      return this.dbService.list(this.list);
   }

   usuarioById(key: string): Observable<Usuario> {
      return this.dbService.objectById(this.afd.object(`/${this.path}/${key}`))
   }

}
