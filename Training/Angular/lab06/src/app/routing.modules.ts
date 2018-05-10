import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AtmServiceService } from './services/atm-service.service';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { AtmoperationsComponent } from './components/atmoperations/atmoperations.component';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';
import { componentFactoryName } from '@angular/compiler';
import { MainopComponent } from './components/mainop/mainop.component';

const myRoutes : Routes = [ 

    { path : 'auth', component : AuthenticateComponent },
    { path : '', redirectTo : '/auth', pathMatch : 'full' },

    { path : 'mainoperation', component : MainopComponent, canActivate : [ AtmServiceService ],
      children : [
        { path : 'transactionlist', 
          component : TransactionListComponent,
          canActivate : [ AtmServiceService ]
        },
        { path : 'operations', 
          component : AtmoperationsComponent,
          canActivate : [ AtmServiceService ]
        }   
      ]
    }
];

@NgModule({

    imports : [
      RouterModule.forRoot(myRoutes,{ enableTracing : true })
    ],
  
    exports : [
        RouterModule
    ]
  
  
  })
  export class RoutingModule { }
  