import './style.css'
import nee from '../lib/main';

function app() {

  const new_nee_canvas = nee();
  const special_div = document.getElementById("insert-here");
  special_div?.appendChild(new_nee_canvas.canvas);

}


app();
