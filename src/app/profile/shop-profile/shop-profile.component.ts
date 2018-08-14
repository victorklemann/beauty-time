import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AngularFireDatabase } from 'angularfire2/database';

import { Estabelecimento } from './shop-profile.model';

@Component({
  selector: 'app-shop-profile',
  templateUrl: './shop-profile.component.html'
})
export class ShopProfileComponent implements OnInit {

  @Input() estabelecimento: Estabelecimento

  constructor(db: AngularFireDatabase) { 
    
  }

  ngOnInit() {
    
  }

  // form_submit(f: NgForm) {
  //   this.angularFire.list("estabelecimentos")
  //                   .push(this.estabelecimento)
  //                   .then((t: any) => console.log('dados gravados: ' + t.key)), (e: any) => 
  //                                     console.log(e.message);
  // }

}
