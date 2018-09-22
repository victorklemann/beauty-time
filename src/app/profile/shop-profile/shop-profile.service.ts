import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

import { Estabelecimento } from "./shop-profile.model";
import { Observable } from "rxjs/Observable";
import { DataBaseService } from "../../general/database.service";

@Injectable()
export class ShopProfileService {

   path: string = 'shops'
   list: AngularFireList<Estabelecimento[]>

   constructor(private afd: AngularFireDatabase, private dbService: DataBaseService) {
      this.refresh()
   }

   refresh() {
      this.list = this.afd.list(this.path)
   }

   save(estabelecimento: Estabelecimento): Observable<Estabelecimento> {
      return this.dbService.save(this.list, estabelecimento);
   }

   delete(keyEstabelecimento: string) {
      this.dbService.delete(this.list, keyEstabelecimento)
   }

   estabelecimentos() {
      return this.dbService.list(this.list);
   }

   estabelecimentoById(key: string): Observable<Estabelecimento> {
      return this.dbService.objectById(this.afd.object(`/${this.path}/${key}`))
   }

}
