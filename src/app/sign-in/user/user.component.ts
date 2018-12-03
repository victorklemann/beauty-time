import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../cadastro/usuario/usuario.model';
import { UsuarioService } from '../../cadastro/usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
   selector: 'app-user',
   templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

   usuario = {} as Usuario;

   constructor(private usuarioService: UsuarioService,
               private router: Router) { }

   ngOnInit() {}

   salvar() {
      this.usuarioService.save(this.usuario);
      this.router.navigate(['/inicio-usuario']);
   }

   voltar() {
      this.router.navigate(['/sign-in']);
   }

}
