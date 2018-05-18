import { Pipe, PipeTransform } from '@angular/core';
import { AtmTransaction } from '../models/atm.interface';

@Pipe({
  name: 'filterpipe',
  pure : true
})
export class FilterpipePipe implements PipeTransform {

  transform(transactions: AtmTransaction[]): any {
    //return null;
    return transactions.filter(transaction => transaction.transactionType === 'Deposit');
  }

}
