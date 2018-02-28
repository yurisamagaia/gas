import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  segment: string = "contato";
  form: any = {}

  constructor(public navCtrl: NavController) {

  }

  logForm() {
    console.log(this.form);
  }

}
