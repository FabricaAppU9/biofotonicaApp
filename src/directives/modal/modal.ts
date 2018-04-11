import { Directive } from '@angular/core';
import { ModalController } from "ionic-angular";

@Directive({
  selector: '[modal]',
  host: {'(click)': 'openModal()'}
})
export class ModalDirective {

  constructor(private modal: ModalController) {
  }

  openModal(){
    const modalInfo = this.modal.create('ModalPage');
    modalInfo.present(); 
  }

}
