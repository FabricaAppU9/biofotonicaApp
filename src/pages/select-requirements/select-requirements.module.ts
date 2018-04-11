import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectRequirementsPage } from './select-requirements';
import { PrimaryRequirementsProvider } from '../../providers/primary-requirements/primary-requirements';
import { BoxSelectTitleComponent } from "../../components/box-select-title/box-select-title";
import { DirectivesModule } from "../../directives/directives.module";

@NgModule({
  declarations: [
    SelectRequirementsPage,
    BoxSelectTitleComponent,
  ],
  imports: [
    IonicPageModule.forChild(SelectRequirementsPage),
    DirectivesModule

  ],
  providers:[
    PrimaryRequirementsProvider
  ]
})
export class SelectRequirementsPageModule {}
