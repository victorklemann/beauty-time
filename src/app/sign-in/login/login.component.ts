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
            this.router.navigate(['/cadastro'])
         } else {
            this.notification.showErrorMessage("Dados inválidos")
         }
      })
   }

}

