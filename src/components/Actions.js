const active = (items, container) => {
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
      <div class='del-icon'>
       <i class="fa-solid fa-trash-can"></i>
      </div>
      </div>
    </div>
`;
  });
  container.innerHTML = toShow;
  deleteItem();
};

const deleteItem = () => {
  const editBtn = document.querySelector('.edit-icon');
  const delBtn = document.querySelector('.del-icon');
  editBtn.addEventListener('click', () => {
    console.log('I de work');
    delBtn.classList.toggle('visible');
    editBtn.classList.toggle('hidden');
  });
};

export { active };
