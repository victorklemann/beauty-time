import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { DataBaseService } from '../general/database.service';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database'

import { Agenda } from './agenda.model';
import { LoginService } from '../sign-in/login/login.service';

@Injectable()
export class AgendaService {

   path: string = 'agendas'
   list: AngularFireList<Agenda[]>

   constructor(private afd: AngularFireDatabase,
               private dbService: DataBaseService,
               private loginService: LoginService) {
      this.refresh()
   }

   refresh() {
      this.list = this.afd.list(this.path)
   }

   save(agenda: Agenda) {
      if (this.loginService.isLoggedIn) {
         agenda.cliente = this.loginService.getUser()
         this.dbService.save(this.list, agenda)
      }
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

   agendasByFuncionario(keyFuncionario: string): Observable<Agenda[]> {
      return this.afd.list(this.path, ref => ref.orderByChild('funcionarioKey').equalTo(keyFuncionario)).valueChanges();
   }

}
