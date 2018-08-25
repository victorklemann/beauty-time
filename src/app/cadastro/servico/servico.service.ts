import { Injectable } from '@angular/core'

import { Observable } from 'rxjs/Observable'
import { Servico } from './servico.model';
import { DataBaseService } from '../../general/database.service';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ServicoService {

   path: string = 'servicos'
   list: AngularFireList<Servico[]>

   constructor(private afd: AngularFireDatabase, private dbService: DataBaseService) { 
      this.refresh()
   }

   refresh() {
      this.list = this.afd.list(this.path)
   }

   save(servico: Servico) {
      this.dbService.save(this.list, servico)
   }

   delete(keyServico: string) {
      this.dbService.delete(this.list, keyServico)
   }
   
   servicos() {
      return this.dbService.list(this.list);
   }

   servicoById(key: string): Observable<Servico> {
      return this.dbService.objectById(this.afd.object(`/${this.path}/${key}`))
   }

}