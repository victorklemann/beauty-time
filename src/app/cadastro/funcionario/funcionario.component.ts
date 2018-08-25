import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { FuncionarioService } from './funcionario.service';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html'
})
export class FuncionarioComponent implements OnInit {

  funcionarios: Observable<any[]>;

   constructor(private funcionarioService: FuncionarioService) { }

   ngOnInit() {
      this.funcionarios = this.funcionarioService.funcionarios();
   }

   delete(keyFuncionario: string) {
      this.funcionarioService.delete(keyFuncionario)
      this.funcionarios = this.funcionarioService.funcionarios()
   }

}