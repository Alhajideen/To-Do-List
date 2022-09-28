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
      </div>
    </div>
`;
  });
  container.innerHTML = toShow;
};

const deleteItem = () => {
  const editBtn = document.querySelector('.edit-icon');
  editBtn.addEventListener('click', () => {
    console.log('I de work');
  });
};

export default { active, deleteItem };
