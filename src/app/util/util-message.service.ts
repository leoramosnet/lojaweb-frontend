import { Injectable } from '@angular/core';
import { ToastyService, ToastOptions } from 'ng2-toasty';

@Injectable()
export class UtilMessageService {

  constructor(private toasty: ToastyService) { }

  public success(title: string, msg: string): void {
    this.toasty.success(this.objectToastyMessage(title, msg, 5000));
  }

  public info(title: string, msg: string): void {
    this.toasty.info(this.objectToastyMessage(title, msg, 10000));
  }

  public warning(title: string, msg: string): void {
    this.toasty.warning(this.objectToastyMessage(title, msg, 10000));
  }

  public error(title: string, msg: string): void {
    this.toasty.error(this.objectToastyMessage(title, msg, 10000));
  }

  private objectToastyMessage(title: string, msg: string, timeout: number): any {
    return {
        title: title,
        msg: msg,
        showClose: true,
        timeout: timeout,
        theme: 'default'
    };
  }

}
