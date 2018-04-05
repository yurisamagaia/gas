import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google: any;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, private geolocation: Geolocation) {

  }

  ngAfterViewInit() {
    this.initMap();
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

  initMap() {
    let options = {enableHighAccuracy: true};
    this.geolocation.getCurrentPosition(options).then((resp) => {
      console.log(resp);
      var locations = [
        {lat: -27.1833132, lng: -48.6254218},
        {lat: -27.1314452, lng: -48.6055919},
        {lat: -27.2666472, lng: -48.7087548},
      ]
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP,

        center: {lat: resp.coords.latitude, lng: resp.coords.longitude}
      });

      var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

      var markers = locations.map(function(location, i) {
        var teste = new google.maps.Marker({
          position: location,
          label: labels[i % labels.length]
        });
        teste.addListener('click', function() {
          console.log(labels[i % labels.length]);
        });
        return teste;
      });

      var markerCluster = new MarkerClusterer(map, markers, {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

    });
  }
}
