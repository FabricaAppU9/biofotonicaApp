import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { MyApp } from './app.component';

import { SelectRequirementsPageModule } from "../pages/select-requirements/select-requirements.module";
import { InsertRequirementsPageModule } from "../pages/insert-requirements/insert-requirements.module";
import { GeneratedConfigsPageModule } from "../pages/generated-configs/generated-configs.module";
import { PrimaryRequirementsProvider } from '../providers/primary-requirements/primary-requirements';
import { GeneratedConfigsProvider } from '../providers/generated-configs/generated-configs';
import { ModalPageModule } from "../pages/modal/modal.module";
import { Network } from '@ionic-native/network';


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SelectRequirementsPageModule,
    InsertRequirementsPageModule,
    GeneratedConfigsPageModule,
    ModalPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PrimaryRequirementsProvider,
    GeneratedConfigsProvider,
    Network
  ]
})
export class AppModule {}
