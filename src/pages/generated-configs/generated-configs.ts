import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController  } from 'ionic-angular';
import { GeneratedConfigsProvider } from '../../providers/generated-configs/generated-configs';
import { SelectRequirementsPage } from '../select-requirements/select-requirements';
import { Network } from '@ionic-native/network';

@IonicPage()
@Component({
  selector: 'page-generated-configs',
  templateUrl: 'generated-configs.html',
})
export class GeneratedConfigsPage {
  configs:any;
  loading;
  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public generatedConfigs: GeneratedConfigsProvider, 
   public load: LoadingController,
   public toast: ToastController,
   public network: Network,
   public alertCtrl: AlertController
   ) {
    let requirements = {
      beamSize: this.navParams.get('beamSize'),
      irradiatedSpots: this.navParams.get('irradiatedSpots'),
      disease: this.navParams.get('disease'),
      light: this.navParams.get('light'),
      equipment: this.navParams.get('equipment')
    }
     this.generatedConfigs.getConfigs(requirements)
       .subscribe(data => this.configs = data);

  }

  ionViewDidEnter(){
  
  }

  ionViewCanEnter() {
    if(this.network.type.includes('none')){
      this.navCtrl.pop();
      this.toast.create({
        message: 'Sem conexão com a internet',
        duration: 2000
      }).present();
      return false;
    } else{
      
      return true;
    }
  }

  

  newConfig(){
    this.navCtrl.setRoot(SelectRequirementsPage);
    this.navCtrl.popToRoot();
  }

}
