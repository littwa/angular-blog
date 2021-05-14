import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class CatService {
  amount: number = 0

  increment() {
    this.amount = this.amount + 1
  }

  decrement() {
    this.amount = this.amount - 1
  }
}
