import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../cadastro/usuario/usuario.model';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ShopProfileService } from '../../profile/shop-profile/shop-profile.service';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

   usuario = {} as Usuario

   constructor(private loginService: LoginService,
               private estabelecimentoService: ShopProfileService,
               private notification: NotificationsComponent,
               private router: Router) { }

   ngOnInit() {
   }

   entrar() {
      if (this.usuario.usuario === undefined || this.usuario.senha === undefined) {
         this.notification.showErrorMessage("Dados inválidos")
         return
      }

      this.loginService.authentication(this.usuario.usuario, this.usuario.senha).subscribe(response => {
         response.map(action => {
            let user = action.payload.val()
            if (user.senha === this.usuario.senha) {
               this.loginService.user = user
               if (user.estabelecimentoKey !== null) {
                  this.estabelecimentoService.estabelecimentoById(user.estabelecimentoKey).subscribe(response => {
                     this.loginService.estabelecimento = response
                  })
               }

               this.notification.showSuccessMessage("Bem vindo, " + user.nome)
               console.log(this.loginService.estabelecimento);
               this.router.navigate(['/cadastro'])
            } else {
               this.notification.showErrorMessage("Dados inválidos")
            }
         })
      })
   }
}

