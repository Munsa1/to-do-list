import { listItemComponent } from './components.js';

const ITEMS = [
  {
    description: 'Take A Shower',
    completed: true,
    index: 0,
  },
  {
    description: 'Have Breakfast',
    completed: false,
    index: 1,
  },
  {
    description: 'Go For Work',
    completed: false,
    index: 2,
  },
];

function sortItems(items = []) {
  return items.sort((a, b) => a.index - b.index);
}

function addItemsToDOM(items = []) {
  const list = document.getElementById('items');
  list.innerHTML = '';
  sortItems(items).forEach((item) => {
    list.appendChild(listItemComponent(item));
  });
}

window.addEventListener('load', () => {
  addItemsToDOM(ITEMS);
});