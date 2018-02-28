import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google: any;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController) {

  }

  loadMap(lat, long){
    let latLng = new google.maps.LatLng(lat, long);
    var mapEle = this.mapElement.nativeElement;
    this.map = new google.maps.Map(mapEle, {
      zoom: 16,
      center: latLng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      draggable: false,
      scrollwheel: false
    });
    
    var marker = new google.maps.Marker({
      position: latLng,
      map: this.map
    });
    marker.setMap(this.map);
  }
}
