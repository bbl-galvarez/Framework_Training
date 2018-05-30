import { Component } from '@angular/core';

import { TransactionsPage } from '../transactions/transactions';
import { LogoutPage } from '../logout/logout';
import { MainPage } from '../main/main';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MainPage;
  tab2Root = TransactionsPage;
  tab3Root = LogoutPage;

  constructor() {

  }
}
