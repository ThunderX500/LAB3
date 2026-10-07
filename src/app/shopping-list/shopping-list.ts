import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.css'
})
export class ShoppingList {
  @Input() items: string[] = [];

  // TODO (remaining half): add an @Output() event for deleting an item.
}
