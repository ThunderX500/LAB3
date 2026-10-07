# SEG3502 – Lab 3: Shopping List

## Status: approximately 50% complete

This repository contains the first half of the Lab 3 exercise. The goal of the exercise is to build an Angular shopping-list application with at least two components: one component for entering an item and adding it, and another component for displaying the list and providing a delete button for each item.

## Completed in this half

- Angular standalone project structure created.
- Root `App` component created.
- `AddItem` component created.
  - Text input is bound with `ngModel`.
  - Clicking **Ajouter** emits the entered item to the parent component.
  - Empty/whitespace-only items are ignored.
  - Input is cleared after a successful add.
- `ShoppingList` component created.
  - Receives the shopping-list items from the parent with `@Input()`.
  - Displays all current items.
- Parent component stores the list and handles newly added items.
- Initial example items are included: `5 pommes`, `12 oeufs`, and `1 pain`.

## Remaining work to finish the lab

1. **Implement deletion in `ShoppingList`.**
   - Add a **Supprimer** button beside every item in `src/app/shopping-list/shopping-list.html`.
   - Add an `@Output()` event in `shopping-list.ts` that emits the index (or item) to delete.

2. **Handle deletion in the parent `App` component.**
   - Add a method such as `deleteItem(index: number)` in `src/app/app.ts`.
   - Remove the selected item from the `items` array.
   - Bind the `ShoppingList` delete output to this method in `src/app/app.html`.

3. **Finish the interface styling.**
   - Adjust spacing/alignment so the input, **Ajouter** button, shopping items, and **Supprimer** buttons look similar to the lab example.
   - Add any final CSS needed in the component stylesheets.

4. **Final verification.**
   - Run `npm install`.
   - Run `npm start` (or `ng serve`).
   - Verify that items can be added.
   - Verify that every **Supprimer** button removes only its associated item.
   - Check the browser console for Angular errors.

## Run the current half

```bash
npm install
npm start
```

Then open the local Angular URL shown in the terminal (normally `http://localhost:4200`).

## Current component communication

`AddItem` → emits a new item → `App` → passes `items` with `@Input()` → `ShoppingList`

The remaining half should add the reverse delete event:

`ShoppingList` → emits item/index to delete → `App` → updates `items`
