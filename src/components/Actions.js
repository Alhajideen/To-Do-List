import delIcon from '../img/del.png';
import Storage from '../modules/Localstorage.js';

const active = (items, container, desc) => {
  let toShow = '';
  items.forEach((elem) => {
    if (elem.completed) {
      toShow += ` <div class="to-hold">
      <div class='text-box'>
        <input type='checkbox' class="checker" checked/>
        <input type="text" class="edit-item"/>
        <h2 class="desc strike">${elem.description}</h2>

      </div>
      <div class='edit-icon'>
        <i class='fa-regular fa-ellipsis-vertical'></i>
      </div>
      <div class='del-icon'>
       <img src="${delIcon}" alt="" />
      </div>
      </div>
    </div>
`;
    } else {
      toShow += ` <div class="to-hold">
      <div class='text-box'>
        <input type='checkbox' class="checker" />
        <input type="text" class="edit-item"/>
        <h2 class="desc">${elem.description}</h2>

      </div>
      <div class='edit-icon'>
        <i class='fa-regular fa-ellipsis-vertical'></i>
      </div>
      <div class='del-icon'>
       <img src="${delIcon}" alt="" />
      </div>
      </div>
    </div>
`;
    }
  });
  container.innerHTML = toShow;
  deleteItem(items);
  // clear(desc);
  completed();
};

// const clear = (desc) => {
//   desc.value = '';
// };

const deleteItem = () => {
  const editBtn = document.querySelectorAll('.edit-icon');
  const delBtn = document.querySelectorAll('.del-icon');
  const editInput = document.querySelectorAll('.edit-item');
  const description = document.querySelectorAll('.desc');
  editBtn.forEach((elem, index) => {
    elem.addEventListener('click', () => {
      const storedItem = localStorage.getItem('todo');
      const item = JSON.parse(storedItem);
      delBtn[index].classList.toggle('visible');
      elem.classList.toggle('hidden');
      description[index].classList.toggle('hidden');
      editInput[index].classList.toggle('visible');
      editInput[index].value = item[index].description;
      edit(index);
    });
  });

  delBtn.forEach((elem, index) => {
    elem.addEventListener('click', () => {
      const storedItem = localStorage.getItem('todo');
      const item = JSON.parse(storedItem);
      elem.parentElement.remove();
      if (item.length === 1) {
        localStorage.removeItem('todo');
      } else {
        Storage.resetId(index);
      }
      window.location.reload();
    });
  });

const edit = (index) => {
    const editInput = document.querySelectorAll('.edit-item');
    editInput[index].addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const storedItem = localStorage.getItem('todo');
        const item = JSON.parse(storedItem);
        item[index].description = editInput[index].value;
        localStorage.setItem('todo', JSON.stringify(item));
        window.location.reload();
      }
    });
  };
};

export const completed = () => {
  const checkBox = document.querySelectorAll('.checker');
  const storedItem = localStorage.getItem('todo');
  const item = JSON.parse(storedItem);
  checkBox.forEach((elem, index) => {
    elem.addEventListener('change', () => {
      if (elem.checked) {
        item[index].completed = true;
        localStorage.setItem('todo', JSON.stringify(item));
        elem.parentNode.childNodes[5].classList.toggle('strike');
      } else {
        item[index].completed = false;
        localStorage.setItem('todo', JSON.stringify(item));
        elem.parentNode.childNodes[5].classList.toggle('strike');
      }
      console.log(elem.checked);
    });
  });
};

export default active;
