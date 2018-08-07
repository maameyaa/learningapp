import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
//import { HomePage } from '../pages/home/home';
// import { MainPage } from '../pages/main/main';
//import { AssessmentPage } from '../pages/assessment/assessment';
//import { TimerPage } from '../pages/timer/timer';
//import { LessonsPage } from '../pages/lessons/lessons';
// import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

@NgModule({
  declarations: [
    MyApp,
    // MainPage,
    //TimerPage,
  //  LessonsPage,
    // LoginPage,
  //  AssessmentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // MainPage,
    //TimerPage,
    //LessonsPage,
    // LoginPage,
    //AssessmentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
