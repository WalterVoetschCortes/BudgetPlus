import { Component, OnInit } from '@angular/core';
import {Budget} from '@angular-devkit/build-angular';
import {BudgetItem} from '../../shared/models/budget-item.mode';
import {UpdateEvent} from '../budget-item-list/budget-item-list.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget = 0;

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  addItem(newItem: BudgetItem) {
    // @ts-ignore
    this.budgetItems.push(newItem);
    this.totalBudget += newItem.amount;
  }

  // tslint:disable-next-line:typedef
  deleteItem(item: BudgetItem) {
    const index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    this.totalBudget -= item.amount;
  }

  // tslint:disable-next-line:typedef
  updateItem(updateEvent: UpdateEvent){
    // result is the update budget item
    // replace the item with th updated/submitted item from the form
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] = updateEvent.new;

    // update the total budget
    this.totalBudget -= updateEvent.old.amount;
    this.totalBudget += updateEvent.new.amount;
  }

}
