// Angular
import { NgModule, ErrorHandler, Injector } from '@angular/core'; // tslint:disable-line
import { BrowserModule } from '@angular/platform-browser';

// Ionic
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

// global state
import { PROVIDERS } from './app.import';

// Ionic Native
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//httpClient
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; //import untuk bisa panggil api
// App
import { MyApp } from './app.component';

// Custom components
import { SideMenuContentComponent } from '../assets/side-menu-content/side-menu-content.component';

// API
import { ApiProvider } from '../providers/api/api';
import { BeritaDataProvider } from '../providers/berita-data/berita-data';

// Pipes
// import { SearchPipe } from '../pipes/search/search';
// import { SortPipe } from '../pipes/sort/sort';

@NgModule({
  declarations: [MyApp, SideMenuContentComponent],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(MyApp) ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar, ApiProvider, SplashScreen, PROVIDERS,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BeritaDataProvider
  ]
})
export class AppModule {
  // Make the injector to be available in the entire module
  // so we can use it in the custom decorator
  static injector: Injector;

  constructor(injector: Injector) {
    AppModule.injector = injector;
  }
}
