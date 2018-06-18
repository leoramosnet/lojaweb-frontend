import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { environment } from '../../environments/environment';

@Injectable()
export class DataService {

  constructor(private httpService: HttpService, private slimLoader: SlimLoadingBarService) { }

  public listarUltimosProdutos(): Promise<any> {
    this.slimLoader.start();

    return new Promise((resolve, reject) => {
     
      this.httpService.getAll(`${environment.apiUrl}/produtos`)
      .map(res => res.rows)
      .subscribe(results => {
          this.slimLoader.complete();

          resolve(results);
          
        },
        erro => {
          this.slimLoader.complete();
          reject(erro);
        }
        );
    });
    
  }

}
