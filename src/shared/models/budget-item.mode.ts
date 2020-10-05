export class BudgetItem {
  description: string;
  amount: number;

  // @ts-ignore
  constructor(public description: string, public amount: number) {
    this.description = description;
    this.amount = amount;
  }
}
