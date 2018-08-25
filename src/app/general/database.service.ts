import { Injectable } from '@angular/core';
import { ErrorHandler } from '../app.error-handler';

import { AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'
import * as _ from 'underscore';

@Injectable()
export class DataBaseService {

   constructor() { }

   save(objects: AngularFireList<any[]>, object: any) {
      if (object.key == null) {
         objects.push(object)
      } else {
         objects.update(object.key, object)
      }
   }

   delete(objects: AngularFireList<any[]>, key: string) {
      objects.remove(key);
   }

   list(objects: AngularFireList<any[]>): Observable<any[]> {
      let data = []
      objects.snapshotChanges().subscribe(actions => {
         actions.map(a => {
            data.push(_.extend(a.payload.val(), { key: a.payload.key }));
         });
      });
      return Observable.of(data);
   }

   objectById(object: AngularFireObject<any>): Observable<any> {
      return object.snapshotChanges().map(response => _.extend(response.payload.val(), { key: response.payload.key }));
   }

}