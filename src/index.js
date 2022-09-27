import './style.scss';
import Home from './components/Home';
import Arrow from './img/Arrows-Down-Left-icon.png';
import Todo from './modules/Todo';
const items = [];

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
      <div class='text-box'>
        <input type='checkbox' class="checker" />
        <h2>Lorem ipsum dolor sit amet.</h2>
      </div>
      <div class='edit-icon'>
        <i class='fa-regular fa-ellipsis-vertical'></i>
      </div>
      
    </div>
    <div class='clear-cmpl border'>
        <button>Clear all completed</button>
      </div>
  </div>`;
}
document.querySelector('.container').innerHTML = component();