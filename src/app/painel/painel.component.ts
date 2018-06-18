import { Component, OnInit } from '@angular/core';
import { UtilMessageService } from '../util/util-message.service';
import { DataService } from './data.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  constructor(private dataService: DataService, private messageService: UtilMessageService) { }

  ngOnInit() {
    this.listarProdutos();
  }

  listarProdutos(): void {
    this.dataService.listarUltimosProdutos()
    .then(lista => {

      if (lista != null) {
        //carrega o objeto com a lista

      } else {
        this.messageService.error('Erro', 'Não foi possível obter a lista de produtos no servidor.');
      }

    })
    .catch(erro => {
      const json = erro.json();
      this.messageService.error('Falha na lista de produtos', json.message);
    });  

  }

}
