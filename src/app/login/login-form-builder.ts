import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { ValidatorFn, ValidationErrors } from '@angular/forms/src/directives/validators';

@Injectable()
export class LoginFormBuilder {

    constructor(private fb: FormBuilder) { }

    public create(): FormGroup {

        return this.fb.group({
            usuario: ['',
                Validators.minLength(4)
            ],
            senha: ['',
                Validators.minLength(4)
            ]
        });
    
    }
}
