import { Component } from '@angular/core';
import { Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SelectRequirementsPage } from "../pages/select-requirements/select-requirements";
import { Network } from '@ionic-native/network';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SelectRequirementsPage;
  messageConnection;
  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    network: Network, 
    toast: ToastController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    network.onDisconnect().subscribe(data => {
     this.messageConnection = toast.create({
        message: `Sem conexão com internet `,
        showCloseButton: true,
        closeButtonText: 'Ok'
      })
     this.messageConnection.present();
    }, error => console.error(error))

    network.onConnect().subscribe(data => {
      this.messageConnection.dismiss();
    })
  }


  
}

