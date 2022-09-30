import './style.scss';
import Arrow from './img/Arrows-Down-Left-icon.png';
import Todo from './modules/Todo.js';
import active from './components/Actions.js';

function component() {
  return `<div class='to-do'>
    <div class='header border'>
      <h1>Today's To Do</h1>
      <span>
        <i class='fa-solid fa-rotate'></i>
      </span>
    </div>
    <div class="text-area border">
    <div class='input-field'>
     <form class='input-field'>
      <input class="field description" type='text' placeholder='Add to your list' required/>
      <button class='submit-btn'><img class="add-btn arrow-left" src=${Arrow} alt='' /></button>
     </form>
    </div>
    </div>
    <div class='todo-list border'>
     
  </div>
      <div class='clear-cmpl border'>
        <button type="button" class="clear-completed">Clear all completed</button>
      </div>`;
}
document.querySelector('.container').innerHTML = component();

// Global variables
const container = document.querySelector('.todo-list');
const cmplt = document.querySelector('.clear-completed');

// Get Item from local storage and diplay on load
window.addEventListener('load', () => {
  const storedItem = localStorage.getItem('todo');
  const parsed = JSON.parse(storedItem);
  if (parsed) {
    if (parsed.length === 0) {
      localStorage.removeItem('todo');
      container.innerHTML = '<h1 class="empty">Your List is Empty</h1>';
    } else {
      const desc = document.querySelector('.description');
      const description = desc.value;
      active(parsed, container, description);
    }
  }
  if (!parsed) {
    container.innerHTML = '<h1 class="empty">Your List is Empty</h1>';
  }
});

// Event handler
const form = document.querySelector('.input-field');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const storedItem = localStorage.getItem('todo');
  const parsed = JSON.parse(storedItem);
  if (parsed) {
    const items = parsed;
    const id = items.length + 1;
    const desc = document.querySelector('.description');
    const description = desc.value;
    const completed = false;
    const newTodo = new Todo(id, description, completed);
    items.push(newTodo);
    localStorage.setItem('todo', JSON.stringify(items));
    active(items, container);
    desc.value = '';
  } else {
    const items = [];
    const id = items.length + 1;
    const desc = document.querySelector('.description');
    const description = desc.value;
    const completed = false;
    const newTodo = new Todo(id, description, completed);
    items.push(newTodo);
    localStorage.setItem('todo', JSON.stringify(items));
    active(items, container);
    desc.value = '';
  }
});

cmplt.addEventListener('click', () => {
  const arr = [];
  const storedItem = localStorage.getItem('todo');
  const item = JSON.parse(storedItem);
  item.forEach((e) => {
    if (!e.completed) {
      arr.push(e);
    }
  });
  if (item.length === 0) {
    localStorage.removeItem('todo');
  } else {
    localStorage.setItem('todo', JSON.stringify(arr));
  }
  window.location.reload();
});
