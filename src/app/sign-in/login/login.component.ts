import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../cadastro/usuario/usuario.model';
import { UsuarioService } from '../../cadastro/usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

   usuario = {} as Usuario;
   invalidUser: boolean = false
   invalidPassword: boolean = false
   invalidLogin: boolean = false

   constructor(private usuarioService: UsuarioService,
               private router: Router) { }


   ngOnInit() {
   }

   entrar() {
      if (this.usuario.usuario === undefined) {
         this.invalidUser = true
         return
      } else {
         this.invalidUser = false
      }

      if (this.usuario.senha === undefined) {
         this.invalidPassword = true
         return
      } else {
         this.invalidPassword = false
      }

      this.usuarioService.authentication(this.usuario.usuario, this.usuario.senha).subscribe(response => {
         let users: Usuario[] = response
         if (users.length > 0) {
            this.router.navigate(['/cadastro'])
         } else {
            this.invalidLogin = true
         }
      });
   }

}
