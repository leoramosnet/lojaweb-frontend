import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Observable } from 'rxjs/Observable';
import { LoginModel } from './../login/loginModel';
import { HttpService } from '../http/http.service';

import { environment } from './../../environments/environment';

@Injectable()
export class AuthService {

  private autenticado = false;
  constructor(private router: Router, private httpService: HttpService,
    private slimLoader: SlimLoadingBarService) { }

  public autenticar(login: LoginModel): Promise<any> {
    this.slimLoader.start();

    const corpo = {
      usuario: login.usuario,
      senha: login.senha
    };

    return new Promise((resolve, reject) => {
     
      this.httpService.post(`${environment.apiUrl}/login`, corpo)
      .map(res => res.json())
      .subscribe(result => {
          this.slimLoader.complete();
          this.autenticado = true;
          resolve(result);
        },
        erro => {
          this.slimLoader.complete();
          reject(erro);
        }
        );
    });
  }

  public estaAutenticado(): boolean {
    return this.autenticado;
  }

}
