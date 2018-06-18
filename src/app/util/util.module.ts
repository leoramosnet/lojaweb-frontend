import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilMessageService } from './util-message.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [UtilMessageService],
  declarations: []
})
export class UtilModule { }
