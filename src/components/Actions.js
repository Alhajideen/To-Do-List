import delIcon from '../img/del.png';
import Storage from '../modules/Localstorage.js';

const active = (items, container, desc) => {
  let toShow = '';
  items.forEach((elem) => {
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
  });
  container.innerHTML = toShow;
  deleteItem(items);
  clear(desc);
};

const clear = (desc) => {
  desc.value = '';
};

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
    });
  });
};

export default active;
