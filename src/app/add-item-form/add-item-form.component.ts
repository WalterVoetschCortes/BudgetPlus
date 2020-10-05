import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {BudgetItem} from '../../shared/models/budget-item.mode';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @Input() item: BudgetItem = new BudgetItem('', null);
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  isNewItem: boolean;

  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    if (this.item){
      // this means that an existing item object was passed into this component
      // therefore this is not an new item
      this.isNewItem = false;
    } else {
      this.isNewItem = true;
      this.item = new BudgetItem('', null);
    }
  }

  // tslint:disable-next-line:typedef
  onSubmit(form: NgForm){
    this.formSubmit.emit(form.value);
    form.reset();
  }

}
