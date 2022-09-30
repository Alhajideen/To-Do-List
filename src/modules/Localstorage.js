export default class Storage {
  static resetId() {
    const arr = [];
    const storedItem = localStorage.getItem('todo');
    const item = JSON.parse(storedItem);
    item.forEach((elem) => {
      const fixedId = { ...elem, id: arr.length + 1 };
      arr.push(fixedId);
      localStorage.setItem('todo', JSON.stringify(arr));
    });
  }
}
