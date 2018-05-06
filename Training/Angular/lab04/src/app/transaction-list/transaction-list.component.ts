import { Component, OnInit } from '@angular/core';
import { AtmServiceService } from '../services/atm-service.service';
import { AtmResponseTransactions } from '../models/atm.interface';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  public atmTransactions  : AtmResponseTransactions = {} as AtmResponseTransactions;

  constructor(public atmService : AtmServiceService) { }

  ngOnInit() {

     this.atmService.onUpdatedTransactions$.subscribe(data =>  {
             this.getLastOperations('23232-1');
          });
  }

  getLastOperations(acct:string) {

     this.atmService.getLastOperations(acct).subscribe(result => {
          this.atmTransactions = result;
    });

  }

}
