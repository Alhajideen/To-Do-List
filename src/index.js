import './style.scss';
import Arrow from './img/Arrows-Down-Left-icon.png';
import Todo from './modules/Todo';

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
        <button>Clear all completed</button>
      </div>`;
}
document.querySelector('.container').innerHTML = component();

//Global variables
const items = [];
const btn = document.querySelector('.add-btn');
const container = document.querySelector('.todo-list');

//Event handler

btn.addEventListener('click', () => {
  const id = Date.now();
  const desc = document.querySelector('.description');
  const description = desc.value;
  const completed = false;
  const newTodo = new Todo(id, description, completed);
  items.push(newTodo);
  addtoDom();
});

// Populate Dom
const addtoDom = () => {
  const toShow = '';
  console.log(items);
  items.forEach((elem) => {
    toShow += ` <div class="to-hold">
      <div class='text-box'>
        <input type='checkbox' class="checker" />
        <h2>${elem.description}</h2>
      </div>
      <div class='edit-icon'>
        <i class='fa-regular fa-ellipsis-vertical'></i>
      </div>
      </div>
    </div>
`;
  });
  container.innerHTML = toShow;
};
