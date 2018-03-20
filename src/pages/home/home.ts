import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  constructor(public navCtrl: NavController, private iab: InAppBrowser, public loadingController:LoadingController) {}
  ngOnInit(){

    // let loading = this.loadingController.create({content : "Loading Kanmit Site, please wait..."});
    // loading.present();
    // const browser = this.iab.create('https://www.kanmittechnologies.ng/','_self',{location:'no'});
    // if(browser) {
    //   loading.dismissAll();
    // }

    this.ionViewLoaded();

  }

  ionViewLoaded() {
    let loader = this.loadingController.create({ content: 'Loading Kanmit Site, please wait...', });

    loader.present().then(() => {
      this.iab.create('https://www.kanmittechnologies.com/','_self',{location:'no'});
      loader.dismiss();
    });
  }
}
