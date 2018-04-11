import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeneratedConfigsPage } from './generated-configs';
import { GeneratedConfigsProvider } from '../../providers/generated-configs/generated-configs';
import { DirectivesModule } from "../../directives/directives.module";


@NgModule({
  declarations: [
    GeneratedConfigsPage
  ],
  imports: [
    IonicPageModule.forChild(GeneratedConfigsPage),
    DirectivesModule,

  ],
  providers:[
    GeneratedConfigsProvider
  ]
})
export class GeneratedConfigsPageModule {}
