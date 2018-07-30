import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

// import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { AssessmentPage } from '../pages/assessment/assessment';
// import { LoginPage } from '../pages/login/login';
import { TimerPage } from '../pages/timer/timer';
import { LessonsPage } from '../pages/lessons/lessons';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = 'LoginPage' ;

  pages: Array<{title: string, component: any}>;

  username = '';
  email = '';

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private auth: AuthServiceProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: MainPage },
      { title: 'Lessons', component: LessonsPage },
      { title: 'Timer', component: TimerPage },
      { title: 'Assessment', component: AssessmentPage }
    ];

    // let info = this.auth.getUserInfo();
    // this.username = info['name'];
    // this.email = info['email'];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  goTo(page) {
    this.nav.setRoot(page);
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.goTo('LoginPage');
    });
  }
}
