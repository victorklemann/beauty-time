import { Component, OnInit, Input } from '@angular/core';
import { Estabelecimento } from './shop-profile.model';

@Component({
  selector: 'app-shop-profile',
  templateUrl: './shop-profile.component.html'
})
export class ShopProfileComponent implements OnInit {

  @Input() estabelecimento: Estabelecimento

  constructor() { }

  ngOnInit() {
  }

}
