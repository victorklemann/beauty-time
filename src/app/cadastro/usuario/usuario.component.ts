import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { Observable } from 'rxjs/Observable';

@Component({
   selector: 'app-usuario',
   templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

   usuarios: Observable<any[]>;

   constructor(private usuarioService: UsuarioService) { }

   ngOnInit() {
      this.usuarios = this.usuarioService.usuarios();
   }

   delete(keyUsuario: string) {
      this.usuarioService.delete(keyUsuario)
      this.usuarios = this.usuarioService.usuarios()
   }

}
