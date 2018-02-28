import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  segment: string = "gasolina";
  state: any;
  pesquisa_avancada: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,) {
    this.state = navParams.get('item');
    console.log(this.state);
  }

  pesquisaAvancada(){
    if(this.pesquisa_avancada == false){
      this.pesquisa_avancada = true;
    }else{
      this.pesquisa_avancada = false;
    }
  }
}
