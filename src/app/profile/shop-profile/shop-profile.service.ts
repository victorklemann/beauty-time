import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

import { Estabelecimento } from "./shop-profile.model";
import { Observable } from "rxjs/Observable";
import { ErrorHandler } from "../../app.error-handler";

@Injectable()
export class ShopProfileService {

   constructor(private db: AngularFireDatabase) { }

   shopById(id: string): Observable<Estabelecimento> {
      return this.db.object(`estabelecimentos/${id}`)
                    .snapshotChanges()
                    .map(res => { return res.payload.val()});
  }

}