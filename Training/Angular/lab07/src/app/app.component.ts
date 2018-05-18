import { Component } from '@angular/core';
import { AtmServiceService  } from './services/atm-service.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 
export class AppComponent {

  title            = environment.title;
  
  constructor(public atmService : AtmServiceService) {
       }

 public isPanelVisible(){
    return this.atmService.accountValid;
  }

}
