import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PainelComponent} from './painel.component';
import { PainelRoutingModule } from './painel-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PainelRoutingModule
  ],
  declarations: [PainelComponent]
})
export class PainelModule { }
