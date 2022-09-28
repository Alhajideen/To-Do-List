import delIcon from '../img/del.png';

const active = (items, container) => {
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
};

const deleteItem = () => {
  const editBtn = document.querySelectorAll('.edit-icon');
  const delBtn = document.querySelectorAll('.del-icon');
  const editInput = document.querySelectorAll('.edit-item');
  const description = document.querySelectorAll('.desc');
  editBtn.forEach((elem, index) => {
    elem.addEventListener('click', () => {
      let storedItem = localStorage.getItem('todo');
      let item = JSON.parse(storedItem);
      console.log('I de work ' + index);
      delBtn[index].classList.toggle('visible');
      elem.classList.toggle('hidden');
      description[index].classList.toggle('hidden');
      editInput[index].classList.toggle('visible');
      editInput[index].value = item[index].description;
    });
  });

  delBtn.forEach((elem, index) => {
    elem.addEventListener('click', () => {
      let storedItem = localStorage.getItem('todo');
      let item = JSON.parse(storedItem);
      elem.parentElement.remove();
      item.splice(index, 1);
      console.log(item[index]);
      localStorage.setItem('todo', JSON.stringify(item));
    });
  });
};

export { active };
