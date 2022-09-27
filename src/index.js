import './style.scss';
import Home from './components/Home';
import Arrow from './img/Arrows-Down-Left-icon.png';

window.addEventListener('load', () => {
  document.querySelector('.container').innerHTML = Home(Arrow);
});
console.log('Hello world');
