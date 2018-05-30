import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';

import { TransactionsPage } from '../pages/transactions/transactions';
import { LogoutPage } from '../pages/logout/logout';
import { MainPage } from '../pages/main/main';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AtmserviceProvider } from '../providers/atmservice/atmservice';
import { HttpinterceptorProvider } from '../providers/httpinterceptor/httpinterceptor';

 
@NgModule({
  declarations: [
    MyApp,
    TransactionsPage,
    LogoutPage,
    MainPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TransactionsPage,
    LogoutPage,
    MainPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AtmserviceProvider,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpinterceptorProvider,
      multi : true
  }
  ]
})
export class AppModule {}
