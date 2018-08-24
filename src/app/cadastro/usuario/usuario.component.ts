import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario.model';
import { UsuarioService } from './usuario.service';

@Component({
   selector: 'app-usuario',
   templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

   usuarios: Usuario[]

   constructor(private usuarioService: UsuarioService) { }

   ngOnInit() {
      this.usuarioService.usuarios().subscribe(usuarios => this.usuarios = usuarios)
   }

   delete(usuario: Usuario) {
      this.usuarioService.delete(usuario)
      this.usuarioService.usuarios().subscribe(usuarios => this.usuarios = usuarios)
   }

}
