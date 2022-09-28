import './style.scss';
import Arrow from './img/Arrows-Down-Left-icon.png';
import Todo from './modules/Todo.js';
import active from './components/Actions';

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
      <input class="field description" type='text' placeholder='Add to your list' />
      <img class="add-btn arrow-left" src=${Arrow} alt='' />
    </div>
    </div>
    <div class='todo-list border'>
     
  </div>
      <div class='clear-cmpl border'>
        <button type="button">Clear all completed</button>
      </div>`;
}
document.querySelector('.container').innerHTML = component();

// Global variables
const items = [];
const btn = document.querySelector('.add-btn');
const container = document.querySelector('.todo-list');

// Event handler
btn.addEventListener('click', () => {
  const id = items.length + 1;
  const desc = document.querySelector('.description');
  const description = desc.value;
  const completed = false;
  const newTodo = new Todo(id, description, completed);
  items.push(newTodo);
  active(items, container);
});

// const deleteItem(){

// }