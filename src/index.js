import '../index.css';
import IMG_JS from '../assets/tiger.jpg'

const imgjs = document.createElement('img');
imgjs.classList.add('img_js');
imgjs.src = IMG_JS;
document.body.append(imgjs);
const textjs = document.createElement('h1');
textjs.textContent = 'JavaScript';
document.body.prepend(textjs);

console.log(path.dirname(__filename));
