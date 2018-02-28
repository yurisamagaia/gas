import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../../pages/search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  state: any;
  item: any;

  constructor(public navCtrl: NavController) {

  }

  goSearch() {
    this.navCtrl.push(SearchPage, {item: this.state});
  }

  isInvalid(){
    if(this.state == "" || this.state == null){
      return true;
    }else{
      return false;
    }
  }
}
