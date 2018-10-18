import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './sign-in/login/login.service';

@Component({
   selector: 'app-root',
   template: '<router-outlet><spinner></spinner></router-outlet><ng2-toasty></ng2-toasty>'
})
export class AppComponent {

   constructor(private loginService: LoginService, private router: Router) { }

   ngOnInit() {
      if (this.loginService.getEstabelecimento() !== undefined && this.loginService.getEstabelecimento() !== null) {
         this.router.navigate(['/inicio-estabelecimento']);
      } else if (this.loginService.getFuncionario() !== undefined && this.loginService.getFuncionario() !== null) {
         this.router.navigate(['/inicio-estabelecimento']);
      } else {
         this.router.navigate(['/inicio-usuario']);
      }
   }
}