import { Component, OnInit } from '@angular/core';
import { ShopProfileService } from '../profile/shop-profile/shop-profile.service';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../sign-in/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-usuario',
  templateUrl: './inicio-usuario.component.html'
})
export class InicioUsuarioComponent implements OnInit {

  estabelecimentos: Observable<any[]>;

  constructor(private shopProfileService: ShopProfileService, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.estabelecimentos = this.shopProfileService.estabelecimentos();
  }

}
