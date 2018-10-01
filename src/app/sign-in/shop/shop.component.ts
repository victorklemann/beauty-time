import { Component, OnInit } from '@angular/core';
import { ShopProfileService } from '../../profile/shop-profile/shop-profile.service';
import { Estabelecimento } from '../../profile/shop-profile/shop-profile.model';
import { Router } from '@angular/router';
import { Usuario } from '../../cadastro/usuario/usuario.model';
import { UsuarioService } from '../../cadastro/usuario/usuario.service';
import { Funcionario } from '../../cadastro/funcionario/funcionario.model';
import { FuncionarioService } from '../../cadastro/funcionario/funcionario.service';
import { ADMINISTRADOR } from '../../cadastro/funcionario/funcionario.tipo-usuario.model';

@Component({
   selector: 'app-shop',
   templateUrl: './shop.component.html'
})
export class ShopComponent implements OnInit {

   estabelecimento = {} as Estabelecimento;
   usuario = {} as Usuario;
   funcionario = {} as Funcionario;

   constructor(private shopProfileService: ShopProfileService,
               private usuarioService: UsuarioService,
               private funcionarioService: FuncionarioService,
               private router: Router) { }

   ngOnInit() {}

   salvar() {
      this.shopProfileService.save(this.estabelecimento).subscribe(response => {
         this.usuario.estabelecimentoKey = response.key
         this.usuario.nome = this.estabelecimento.nome
         this.usuarioService.save(this.usuario).subscribe(response => {
            this.funcionario.usuarioKey = response.key
            this.funcionario.usuario = this.usuario
            this.funcionario.tipoUsuario = ADMINISTRADOR
            this.funcionarioService.save(this.funcionario)
         })
      });
      this.router.navigate(['/cadastro/usuario']);
   }

}
