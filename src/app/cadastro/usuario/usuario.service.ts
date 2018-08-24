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

   valueChanges() {
      return this.afd.list(this.path).valueChanges()
   }

   refresh() {
      this.list = this.afd.list(this.path)
   }

   save(usuario: Usuario) {
      this.dbService.save(this.list, usuario)
   }

   delete(keyUsuario: string) {
      this.list.remove(keyUsuario).then(_ => console.log('item deleted!'));
      // this.dbService.delete(this.afd.object(`/${this.path}/${usuario.key}`))
   }
   
   usuarios(): Observable<Usuario[]> {
      return this.dbService.list(this.list);
   }

   usuarioById(key: string): Observable<Usuario> {
      return this.dbService.objectById(this.afd.object(`/${this.path}/${key}`))
   }

}