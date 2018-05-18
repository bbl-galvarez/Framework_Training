/*
  Instructor : Mario Estrada Rosa
  Email  : marioestrada@eycgrupo.com
  Date   : April 2018
  Class  : Introduction to Angular Framework
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from './router.module';

import { AtmServiceService } from './services/atm-service.service';
import { GuardServiceService } from './services/guard-service.service';

import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { AtmoperationsComponent } from './components/atmoperations/atmoperations.component';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';
import { MainopComponent } from './components/mainop/mainop.component';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { FilterpipePipe } from './pipes/filterpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TransactionListComponent,
    AtmoperationsComponent,
    AuthenticateComponent,
    MainopComponent,
    FilterpipePipe
  ],
  
  imports: [
    BrowserModule  ,
    HttpClientModule,
    RoutingModule,
    ReactiveFormsModule
  ],
  //We have to import the service as a provider in the NGModule ecosystem
  //otherwise it won´t be available in the Angular Application
  providers: [ AtmServiceService, 
              GuardServiceService, 
              {
                  provide: HTTP_INTERCEPTORS,
                  useClass: HttpInterceptorService,
                  multi : true
              }   
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
