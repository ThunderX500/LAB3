import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  imports: [FormsModule],
  templateUrl: './add-item.html',
  styleUrl: './add-item.css'
})
export class AddItem {
  newItem = '';

  @Output() itemAdded = new EventEmitter<string>();

  addItem(): void {
    const item = this.newItem.trim();

    if (!item) {
      return;
    }

    this.itemAdded.emit(item);
    this.newItem = '';
  }
}
