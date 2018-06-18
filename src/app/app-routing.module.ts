import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth-guard';

import { PanelComponent } from './panel/panel.component';
import { NotFoundComponent } from './shared/not-found.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    { path: '', pathMatch: 'full', component: PanelComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'not-found' }
  ];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ],
    declarations: []
})
export class AppRoutingModule {}
