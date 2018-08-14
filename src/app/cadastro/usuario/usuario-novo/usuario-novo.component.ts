import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AngularFireDatabase } from 'angularfire2/database';
import { Usuario } from '../usuario.model';

@Component({
   selector: 'app-usuario-novo',
   templateUrl: './usuario-novo.component.html'
})
export class UsuarioNovoComponent implements OnInit {

   constructor(private angularFire: AngularFireDatabase) { }

   private usuario = {} as Usuario;

   ngOnInit() {}

   salvar(f: NgForm) {
      this.usuario.usuario = f.controls.usuario.value
      this.usuario.nome = f.controls.nome.value
      this.usuario.email = f.controls.email.value
      this.usuario.telefone = f.controls.telefone.value
      this.usuario.senha = f.controls.senha.value
      this.usuario.cep = f.controls.cep.value
      this.usuario.endereco = f.controls.endereco.value
      // this.usuario.cidade = f.controls.cidade.value
      
      this.angularFire.list("usuarios").push(this.usuario)
                      .then((t: any) => console.log('dados gravados: ' + t.key)), 
                            (e: any) => console.log(e.message);
   }

}
