import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AtmServiceService  } from '../services/atm-service.service';

@Injectable()
export class GuardServiceService implements CanActivate {

  constructor(public atmService : AtmServiceService, public router : Router ) { }

  canActivate() : boolean {
   if (this.atmService.accountValid) {
         return this.atmService.accountValid;
   }
   else {
     this.router.navigate(['/auth']); return false;
          
   }
  }

}
