import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AtmServiceService } from './services/atm-service.service';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionlistComponent } from './components/transactionlist/transactionlist.component';
import { OperationlistComponent } from './components/operationlist/operationlist.component';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionListComponent,
    TransactionlistComponent,
    OperationlistComponent,
    AuthenticateComponent
  ],
  imports: [
    BrowserModule  ,
    HttpClientModule,
    ReactiveFormsModule
  ],
  //We have to import the service as a provider in the NGModule ecosystem
  //otherwise it won´t be available in the Angular Application
  providers: [AtmServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
