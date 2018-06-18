import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { LoginModel } from './loginModel';
import { LoginFormBuilder } from './login-form-builder';
import { AuthService } from './../auth/auth.service';
import { UtilMessageService } from '../util/util-message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginFormBuilder]
})

export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor(private lfb: LoginFormBuilder, private authService: AuthService, private router: Router,
              private messageService: UtilMessageService) {

  }

  ngOnInit() {
    this.formulario = this.lfb.create();
  }

  submit(): void {
    const login = new LoginModel(this.formulario.value.usuario, this.formulario.value.senha);

    this.authService.autenticar(login)
      .then((resultLogin) => {

        if (resultLogin != null) {
          this.router.navigate(['/painel']);
        } else {
          this.messageService.error('Falha no login', 'Resposta do servidor está no formato inválido');
        }

      })
      .catch(erro => {
        this.messageService.error('Falha no login', erro._body);
      });
  }

}
