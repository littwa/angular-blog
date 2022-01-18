import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CatService {
  amount = 0;

  increment(): void {
    this.amount = this.amount + 1;
  }

  decrement(): void {
    this.amount = this.amount - 1;
  }
}
