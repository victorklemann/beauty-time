import { Component, OnInit } from '@angular/core';
import { ShopProfileService } from '../../profile/shop-profile/shop-profile.service';
import { Estabelecimento } from '../../profile/shop-profile/shop-profile.model';
import { Router } from '@angular/router';
import { Usuario } from '../../cadastro/usuario/usuario.model';
import { UsuarioService } from '../../cadastro/usuario/usuario.service';

@Component({
   selector: 'app-shop',
   templateUrl: './shop.component.html'
})
export class ShopComponent implements OnInit {

   estabelecimento = {} as Estabelecimento;
   usuario = {} as Usuario;

   constructor(private shopProfileService: ShopProfileService,
               private usuarioService: UsuarioService,
               private router: Router) { }

   ngOnInit() {}

   salvar() {
      this.shopProfileService.save(this.estabelecimento).subscribe(response => {
         this.usuario.estabelecimentoKey = response.key;
         this.usuarioService.save(this.usuario);
      });
      this.router.navigate(['/cadastro/usuario']);
   }

}
