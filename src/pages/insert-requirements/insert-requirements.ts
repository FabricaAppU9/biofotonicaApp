import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,Platform } from 'ionic-angular';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { GeneratedConfigsPage } from "../generated-configs/generated-configs";
import { customValidator } from "../../util/customValidator";

@IonicPage()
@Component({
  selector: 'page-insert-requirements',
  templateUrl: 'insert-requirements.html',
})
export class InsertRequirementsPage {

  requirements: FormGroup;
  beamControl: FormControl;
  spotsControl: FormControl;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public formBuilder: FormBuilder,
              ) {
    this.beamControl = formBuilder.control(null,Validators.compose(
      [
        Validators.required,
        customValidator.isZero,
        customValidator.isPositive
      ]
    ));
    this.spotsControl = formBuilder.control(null,Validators.compose(
      [
        Validators.required,
        customValidator.isZero,
        customValidator.isPositive,
        customValidator.verifyFloatType
      ]
    ));

    this.requirements = formBuilder.group({
      beamSize: this.beamControl,
      irradiatedSpots: this.spotsControl,
    });

  }

  generateConfigs(){
    let primary = this.navParams.get('PrimaryRequirementsParams');
    this.navCtrl.push(GeneratedConfigsPage, {
      beamSize: parseFloat(this.requirements.get('beamSize').value),
      irradiatedSpots: this.requirements.get('irradiatedSpots').value,
      disease: primary.disease,
      light: primary.light,
      equipment: primary.equipment
    });
    
  }

}
