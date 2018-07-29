// Angular
import { NgModule, ErrorHandler, Injector } from '@angular/core'; // tslint:disable-line
import { BrowserModule } from '@angular/platform-browser';

// Ionic
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

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

@NgModule({
  declarations: [MyApp, SideMenuContentComponent],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar, ApiProvider, SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
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
