import { Component } from '@angular/core';
import { AddItem } from './add-item/add-item';
import { ShoppingList } from './shopping-list/shopping-list';

@Component({
  selector: 'app-root',
  imports: [AddItem, ShoppingList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  items: string[] = ['5 pommes', '12 oeufs', '1 pain'];

  addItem(item: string): void {
    this.items = [...this.items, item];
  }

  deleteItem(index: number): void {
    this.items = this.items.filter((_, i) => i !== index);
  }
}
