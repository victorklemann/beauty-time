import { Component, OnInit } from '@angular/core';
import { LoginService } from '../sign-in/login/login.service';

@Component({
   selector: 'app-cadastro',
   templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

   constructor(private loginService: LoginService) { }

   ngOnInit() {
      console.log(this.loginService);
   }

}
