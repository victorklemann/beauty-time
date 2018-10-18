import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../cadastro/usuario/usuario.model';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { NotificationsComponent } from '../../notifications/notifications.component';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

   usuario = {} as Usuario

   constructor(private loginService: LoginService,
      private notification: NotificationsComponent,
      private router: Router) { }

   ngOnInit() {
   }

   entrar() {
      if (this.usuario.usuario === undefined || this.usuario.senha === undefined) {
         this.notification.showErrorMessage("Dados inválidos")
         return
      }

      this.loginService.authentication(this.usuario.usuario, this.usuario.senha).then(response => {
         if (this.loginService.isLoggedIn()) {
            this.notification.showSuccessMessage("Bem vindo, " + this.loginService.getUser().nome)
            
            if (this.loginService.getEstabelecimento() !== undefined && this.loginService.getEstabelecimento() !== null) {
               this.router.navigate(['/inicio-estabelecimento']);
            } else if (this.loginService.getFuncionario() !== undefined && this.loginService.getFuncionario() !== null) {
               this.router.navigate(['/inicio-estabelecimento']);
            } else if (this.loginService.getUser() !== undefined && this.loginService.getUser !== null) {
               this.router.navigate(['/inicio-usuario']);
            } else {
               this.router.navigate(['/sign-in']);
            }
         } else {
            this.notification.showErrorMessage("Dados inválidos")
         }
      })
   }

}

