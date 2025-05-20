import './style.css'
import Nee from '../lib/main';

function app() {

  // const new_nee_canvas = nee(
  //   window.innerWidth,
  //   window.innerHeight,
  //   true,
  //   {
  //     screenArea: {
  //       min: {x: 100, y: 100},
  //       max: {x: 500, y: 500}
  //     },
  //     initialPoint: {
  //       x:250,
  //       y: 250 
  //     },
  //     endPoints: [
  //       {
  //         x:100,
  //         y: 100,
  //       },
  //       {
  //         x:400,
  //         y: 400
  //       }
  //     ],
  //     intervalLimits: {
  //       min: 1,
  //       max: 10
  //     }
  //   }
  // );
  // const special_div = document.getElementById("insert-here");
  // special_div?.appendChild(new_nee_canvas.canvas);

  const new_nee = new Nee();

  new_nee.show();

  new_nee.animate();

}


app();
