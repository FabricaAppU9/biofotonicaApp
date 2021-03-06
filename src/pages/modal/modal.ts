import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private view: ViewController
  ) {}

  ionViewDidLoad() {
  }

  close(){
    this.view.dismiss();
  }

}
