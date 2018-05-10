import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import { AtmServiceService } from '../../services/atm-service.service';
import { Router } from '@angular/router';

@Component({
  //selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {

  theForm : FormGroup;

  constructor(public atmService : AtmServiceService,
               public route : Router) {

    this.atmService.onUpdateAccountNumber$.subscribe(resp=> {
            this.route.navigate(  ['/mainoperation' ]);
    });
    

 }

  ngOnInit() {
    this.theForm = new FormGroup({
        accountNumber : new FormControl('',Validators.required),
        pinNumber     : new FormControl('',Validators.required)
    }
    );
  }

  startOperations() : void {
      this.atmService.setAccountNumber(this.theForm.get("accountNumber").value,
      this.theForm.get("pinNumber").value);
  }

  showInvalidAccount() : boolean {
   
      if (this.theForm.get('accountNumber').hasError('required') && 
            (this.theForm.get('accountNumber').dirty || this.theForm.get('accountNumber').touched )) {
              //before returning true, lets´s reset the property to the default value
              this.atmService.accountValid = undefined;
              return true;
            }
      else {
              return false;
      }
  }

  showInvalidPin() : boolean {
   
    if (this.theForm.get('pinNumber').hasError('required') && 
          (this.theForm.get('pinNumber').dirty || this.theForm.get('pinNumber').touched )) {
             this.atmService.accountValid = undefined;
            return true;
          }
    else {
            return false;
    }
}

}