import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ServicoService } from './servico.service';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html'
})
export class ServicoComponent implements OnInit {

  servicos: Observable<any[]>;

   constructor(private servicoService: ServicoService) { }

   ngOnInit() {
      this.servicos = this.servicoService.servicos();
   }

   delete(keyServico: string) {
      this.servicoService.delete(keyServico)
      this.servicos = this.servicoService.servicos()
   }

}
