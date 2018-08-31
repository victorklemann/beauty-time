import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AngularFireDatabase } from 'angularfire2/database';

import { Estabelecimento } from './shop-profile.model';

@Component({
   selector: 'app-shop-profile',
   templateUrl: './shop-profile.component.html'
})
export class ShopProfileComponent implements OnInit {

   @Input() estabelecimento: Estabelecimento;
   isEditing: boolean = true;

   constructor(db: AngularFireDatabase) {

   }

   ngOnInit() {

   }

   changeEditing() {
      console.log(this.isEditing);

      this.isEditing = !this.isEditing;
   }

   equals(estadoUm, estadoDois) {
      return estadoUm && estadoDois && estadoUm.codigo == estadoDois.codigo;
   }

}
