import { Component, OnInit } from '@angular/core';
import { ShopProfileService } from '../profile/shop-profile/shop-profile.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-inicio-usuario',
  templateUrl: './inicio-usuario.component.html'
})
export class InicioUsuarioComponent implements OnInit {

  estabelecimentos: Observable<any[]>;
  
  constructor(private shopProfileService: ShopProfileService) { }

  ngOnInit() {
    this.estabelecimentos = this.shopProfileService.estabelecimentos();
  }

}
