// import Todo from '../modules/Todo';

// export default class Home {
//   static append(icon) {
//     return `<div class='to-do'>
//     <div class='header border'>
//       <h1>Today's To Do</h1>
//       <span>
//         <i class='fa-solid fa-rotate'></i>
//       </span>
//     </div>
//     <div class="text-area border">
//     <div class='input-field'>
//       <input class="field description" type='text' placeholder='Add to your list' />
//       <img class="add-btn arrow-left" src=${icon} alt='' />
//     </div>
//     </div>
//     <div class='todo-list border'>
//       <div class='text-box'>
//         <input type='checkbox' class="checker" />
//         <h2>Lorem ipsum dolor sit amet.</h2>
//       </div>
//       <div class='edit-icon'>
//         <i class='fa-regular fa-ellipsis-vertical'></i>
//       </div>
      
//     </div>
//     <div class='clear-cmpl border'>
//         <button>Clear all completed</button>
//       </div>
//   </div>`;
//     Home.active();
//   }

//   static active() {
//     const desc = document.querySelector('.description');
//     const btn = document.querySelector('.add-btn');
//     const item = [];
//     const items = JSON.parse(localStorage.getItem('todo'));

//     const container = document.querySelector('.todo-list');

//     btn.addEventListener('click', () => {
//       const id = Date.now();
//       const description = desc.value;
//       const completed = false;
//       const newTodo = new Todo(id, description, completed);
//       item.push(newTodo);
//       localStorage.setItem('todo', JSON.stringify(item));

//       newTodo.addNew(container, items);
//     });
//   }
// }
