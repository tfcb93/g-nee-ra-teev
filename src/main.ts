import './style.css'
import nee from '../lib/main';

function app() {

  const new_nee_canvas = nee(window.innerWidth, window.innerHeight, true, {screenArea: {min: {x: 100, y: 100}, max: {x: 200, y: 200}}});
  const special_div = document.getElementById("insert-here");
  special_div?.appendChild(new_nee_canvas.canvas);

}


app();
