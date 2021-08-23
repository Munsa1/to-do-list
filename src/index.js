<<<<<<< HEAD
import renderItems from './components.js';
import store from './todo-store.js';
import './style.css';

const form = document.getElementById('add-todo');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const description = form.elements[0].value;
  store.addTodo(description);
  form.elements[0].value = '';
});

window.addEventListener('load', () => {
  document.getElementById('clear-btn').addEventListener('click', () => {
    store.clearCompleted();
  });

  const STORE_KEY = 'localstorage/todos';

  store.onUpdate(() => {
    renderItems(store.todos);
  });
  store.onUpdate(() => {
    localStorage.setItem(STORE_KEY, JSON.stringify(store.todos));
  });
  const saved = localStorage.getItem(STORE_KEY);
  store.loadTodos(saved ? JSON.parse(saved) : []);
=======
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
>>>>>>> 56de60e763155eeb8a44d3e816eb23934d8e1d56
});