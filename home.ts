import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private callNumber: CallNumber) {

    
  }
    callMe(): void {
      this.callNumber.callNumber('+277768467', true);
    }

}
