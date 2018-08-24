import { Component } from '@angular/core';
import { ToastyService, ToastyConfig, ToastOptions } from 'ng2-toasty';

@Component({
   selector: 'app-notify',
})
export class NotificationsComponent {

   constructor(private toastyService: ToastyService, private toastyConfig: ToastyConfig) {
      // Assign the selected theme name to the `theme` property of the instance of ToastyConfig. 
      // Possible values: default, bootstrap, material
      this.toastyConfig.theme = 'material';
      this.toastyConfig.showClose = true;
      this.toastyConfig.timeout = 5000;
   }

   showDefaultMessage(message: string, title?: string, timeout?: number) {
      this.addToast(message, title, timeout, 'default')
   }

   showInfoMessage(message: string, title?: string, timeout?: number) {
      this.addToast(message, title, timeout, 'info')
   }

   showSuccessMessage(message: string, title?: string, timeout?: number) {
      console.log('a');
      
      this.addToast(message, title, timeout, 'success')
   }

   showWaitMessage(message: string, title?: string, timeout?: number) {
      this.addToast(message, title, timeout, 'wait')
   }

   showErrorMessage(message: string, title?: string, timeout?: number) {
      this.addToast(message, title, timeout, 'error')
   }

   showWarningMessage(message: string, title?: string, timeout?: number) {
      this.addToast(message, title, timeout, 'warning')
   }

   addToast(message: string, title: string, timeout: number, type: string) {
      var toastOptions: ToastOptions = {
         title: title,
         msg: message
      }
      if (timeout !== undefined) {
         toastOptions.timeout = timeout;
      }

      switch (type) {
         case 'default': this.toastyService.default(toastOptions); break;
         case 'info': this.toastyService.info(toastOptions); break;
         case 'success': this.toastyService.success(toastOptions); break;
         case 'wait': this.toastyService.wait(toastOptions); break;
         case 'error': this.toastyService.error(toastOptions); break;
         case 'warning': this.toastyService.warning(toastOptions); break;
      }
   }
}