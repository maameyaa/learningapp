import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the LessonsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lessons',
  templateUrl: 'lessons.html'
})
export class LessonsPage {

  englishRoot = 'EnglishPage'
  twiRoot = 'TwiPage'


  constructor(public navCtrl: NavController) {}

}
