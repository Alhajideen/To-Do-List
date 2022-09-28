import './style.scss';
import Arrow from './img/Arrows-Down-Left-icon.png';

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
const items = [
  {
    id: 1,
    description: 'Wash the dishes',
    completed: false,
  },
  {
    id: 2,
    description: 'complete To Do List project',
    completed: false,
  },
  {
    id: 3,
    description: 'Fix the car',
    completed: false,
  },
];

// Populate Dom
const addtoDom = () => {
  const container = document.querySelector('.todo-list');
  let toShow = '';
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
addtoDom();
