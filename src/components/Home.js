const Home = (icon) => {
  return `<div class='to-do'>
    <div class='header'>
      <h1>Today's To Do</h1>
      <span>
        <i class='fa-solid fa-rotate'></i>
      </span>
    </div>
    <div class='input-field'>
      <input type='text' placeholder='Add to your list' />
      <img class="arrow-left" src=${icon} alt='' />
    </div>
    <div class='todo-list'>
      <div class='text-box'>
        <input type='checkbox' />
        <h2>Lorem ipsum dolor sit amet.</h2>
      </div>
      <div class='edit-icon'>
        <i class='fa-regular fa-ellipsis-vertical'></i>
      </div>
      
    </div>
    <div class='clear-cmpl'>
        <button>Clear all completed</button>
      </div>
  </div>`;
};

export default Home;
