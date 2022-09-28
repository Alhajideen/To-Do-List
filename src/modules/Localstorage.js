export default class Storage {
  static resetId(index) {
    const arr = [];
    let storedItem = localStorage.getItem('todo');
    let item = JSON.parse(storedItem);
    item.splice(index, 1);
    item.forEach((elem, index) => {
      let fixedId = { ...elem, id: arr.length + 1 };
      // console.log(fixedId);
      arr.push(fixedId);
      localStorage.setItem('todo', JSON.stringify(arr));
    });
  }
}
