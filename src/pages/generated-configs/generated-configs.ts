import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController  } from 'ionic-angular';
import { GeneratedConfigsProvider } from '../../providers/generated-configs/generated-configs';
import { SelectRequirementsPage } from '../select-requirements/select-requirements';
import { Network } from '@ionic-native/network';

@IonicPage()
@Component({
  selector: 'page-generated-configs',
  templateUrl: 'generated-configs.html',
})
export class GeneratedConfigsPage {
  configs:any[];
  loading;
  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public generatedConfigs: GeneratedConfigsProvider, 
   public load: LoadingController,
   public toast: ToastController,
   public network: Network
   ) {
    let beamSize:number = this.navParams.get('beamSize');
    let irradiatedSpots:number = this.navParams.get('irradiatedSpots')
    this.configs = this.generatedConfigs.getConfigs(beamSize,irradiatedSpots);
    this.loading = this.load.create({content: 'Carregando...'});
    
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
