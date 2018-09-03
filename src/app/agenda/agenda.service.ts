import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { DataBaseService } from '../general/database.service';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

import { Agenda } from './agenda.model';

@Injectable()
export class AgendaService {

   path: string = 'agendas'
   list: AngularFireList<Agenda[]>

   constructor(private afd: AngularFireDatabase, private dbService: DataBaseService) { 
      this.refresh()
   }

   refresh() {
      this.list = this.afd.list(this.path)
   }

   save(agenda: Agenda) {
      this.dbService.save(this.list, agenda)
   }

   delete(keyAgenda: string) {
      this.dbService.delete(this.list, keyAgenda)
   }
   
   agendas() {
      return this.dbService.list(this.list);
   }

   agendaById(key: string): Observable<Agenda> {
      return this.dbService.objectById(this.afd.object(`/${this.path}/${key}`))
   }

}