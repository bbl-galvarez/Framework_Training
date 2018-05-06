import { Component, OnInit } from '@angular/core';
import { AtmServiceService } from '../../services/atm-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {

public theForm : FormGroup;

  constructor(public atmService: AtmServiceService) { }

  ngOnInit() {

    this.theForm = new FormGroup({
      accountNumber : new FormControl('', Validators.required)
    });

  }

  startOperations(){
    let x = this.theForm.get("accountNumber").value;
    this.atmService.setAccountNumber(x);
  }

}
