import './style.css'
import Nee from '../lib/main';

function app() {

  // const new_nee_canvas = nee(
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

  const new_nee = new Nee();

  
  new_nee.show();
  
  new_nee.startPoint({x: 100, y: 100});
  
  new_nee.endPoints([{x: 250, y: 250}, {x: 50, y: 300}])
  
  new_nee.squares(5, 50, 50);
  
  new_nee.changeVariationInterval(-2, 2);

  new_nee.animate();

}


app();
