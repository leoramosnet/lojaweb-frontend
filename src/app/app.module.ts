import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ToastyModule } from 'ng2-toasty';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { PanelModule } from './panel/panel.module';
import { UtilModule } from './util/util.module';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard';
import { LoginComponent } from './login/login.component';
import { HttpService } from './http/http.service';
import { PainelComponent } from './painel/painel.component';
import { PainelModule } from './painel/painel.module';
import { ChartsModule } from 'ng2-charts';
import { DataService } from './painel/data.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AngularFontAwesomeModule,
    SlimLoadingBarModule.forRoot(),
    ToastyModule.forRoot(),
    HttpModule,
    SharedModule,
    PanelModule,
    PainelModule,
    UtilModule,
    AppRoutingModule,
    ChartsModule
  ],
  exports: [
    SlimLoadingBarModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    HttpService,
    DataService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
