import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { ListHiking } from '../pages/hiking-list/hiking-list';
import { HikeActivePage } from '../pages/hiking-active/hiking-active';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CurrentHikingService } from '../Service/CurrentHikingService';
import { GeolocationService } from '../Service/GeolocationService';
import { OpenDataService } from '../Service/OpenDataService';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HomePage the root (or first) page
  rootPage = HomePage;
  staticPages: Array<{title: string, component: any}>;
  dynamicPages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public currentHiking: CurrentHikingService,
    public geoService: GeolocationService,
    public openDataService: OpenDataService
  ) {
    this.initializeApp();

    // set our app's pages
    this.staticPages = [
      { title: 'Home', component: HomePage },
      { title: 'Trails List', component: ListHiking }
    ];

    this.dynamicPages = [
      { title: 'Trail In progress', component: HikeActivePage }
    ]
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      console.log("JE SUIS UP")
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.geoService = new GeolocationService(new Geolocation());
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
