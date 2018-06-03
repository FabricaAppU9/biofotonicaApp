import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { InsertRequirementsPage } from "../insert-requirements/insert-requirements";
import { PrimaryRequirementsProvider } from '../../providers/primary-requirements/primary-requirements';

@IonicPage()
@Component({
  selector: 'page-select-requirements',
  templateUrl: 'select-requirements.html'
})
export class SelectRequirementsPage {
  requirements: FormGroup;
  private teste:any;
  private lights:any[];
  private diseases:any[];
  private equipments:any[];
  equipmentControl: FormControl;
  diseaseControl: FormControl;
  lightControl: FormControl;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public formBuilder: FormBuilder, 
    public primaryRequirements: PrimaryRequirementsProvider,
    ) {
   this.equipmentControl = formBuilder.control('',Validators.required);
   this.diseaseControl = formBuilder.control('', Validators.required);
   this.lightControl = formBuilder.control('', Validators.required);
   this.equipmentControl.disable();
   this.diseaseControl.disable();
   this.requirements = formBuilder.group({
     equipment: this.equipmentControl,
     disease: this.diseaseControl,
     light: this.lightControl
   });

 }

  ionViewDidLoad(){
    this.primaryRequirements.getLights()
    .then(data => {
      this.lights = data.json(); 
    }).catch(err => console.log(err));
    
  }

  ionViewDidEnter(){
    //
  }

  selectLight(selected){
    if(selected == '')
    {
      this.diseaseControl.disable();
      this.diseaseControl.reset();
    }
    else {
      this.diseaseControl.reset();
      this.diseaseControl.enable();
      this.primaryRequirements.getDiseases(selected.nm_fonte)
          .subscribe(data => this.diseases = data);
    }
  }
  selectDisease(selected){
    if(selected == '')
      {
        this.equipmentControl.disable();
        this.equipmentControl.reset();
      }
      else{
        this.equipmentControl.reset();
        this.equipmentControl.enable();
        this.primaryRequirements.getEquipments(this.lightControl.value.nm_fonte,selected.cid)
          .subscribe(data => this.equipments = data);
      }
    }
    selectEquipment(){
       
    }
    
  nextPage(){
    this.navCtrl.push(InsertRequirementsPage,{
      PrimaryRequirementsParams: this.requirements.value
    });

  }

}
