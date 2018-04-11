import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InsertRequirementsPage } from './insert-requirements';
import { DirectivesModule } from "../../directives/directives.module";

@NgModule({
  declarations: [
    InsertRequirementsPage
  ],
  imports: [
    IonicPageModule.forChild(InsertRequirementsPage),
    DirectivesModule,

  ],
})
export class InsertRequirementsPageModule {}
