import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { DataBaseService } from '../general/database.service';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database'
import * as _ from 'underscore'

import { Agenda } from './agenda.model';
import { LoginService } from '../sign-in/login/login.service';
import { reject } from 'q';

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

   agendasByData(data: string): Promise<any[]> {
      return new Promise((ok, r) => {
         if (this.loginService.getFuncionario() !== null && this.loginService.getFuncionario() !== undefined) {
            this.agendasByFuncionario(this.loginService.getFuncionario().key).subscribe(response => {
               let agendas: Agenda[] = []
               response.forEach(agenda => {
                  if (agenda.data === data) {
                     agendas.push(agenda)
                  }
                  ok(agendas)
               });
            }, error => {
               reject(error)
            })
         } else {
            this.afd.list(this.path, ref => ref.orderByChild('data').equalTo(data)).valueChanges().subscribe(agendas => {
               ok(agendas)
            }, error => {
                  reject(error)
            });
         }
      })
   }

   agendaById(key: string): Observable<Agenda> {
      return this.dbService.objectById(this.afd.object(`/${this.path}/${key}`))
   }

   agendasByFuncionario(keyFuncionario: string): Observable<Agenda[]> {
      return this.afd.list(this.path, ref => ref.orderByChild('funcionarioKey').equalTo(keyFuncionario)).valueChanges();
   }

}
