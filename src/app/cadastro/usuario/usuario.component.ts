import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario.model';
import { UsuarioService } from './usuario.service';
import { Observable } from 'rxjs/Observable';

@Component({
   selector: 'app-usuario',
   templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

   // usuarios: Usuario[]

   usuarios: Observable<any[]>;

   constructor(private usuarioService: UsuarioService) { }

   ngOnInit() {
      // this.usuarioService.usuarios().subscribe(usuarios => this.usuarios = usuarios)
      
      this.usuarios = this.usuarioService.valueChanges();
   }

   delete(keyUsuario: string) {
      console.log(123);
      this.usuarioService.delete(keyUsuario)
      // this.usuarioService.usuarios().subscribe(usuarios => this.usuarios = usuarios)
   }

}
