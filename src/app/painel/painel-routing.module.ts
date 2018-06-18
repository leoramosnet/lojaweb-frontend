import { NgModule } from '@angular/core';

import { AuthGuard } from '../auth/auth-guard';
import { PainelComponent } from './painel.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'painel', component: PainelComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PainelRoutingModule { }
