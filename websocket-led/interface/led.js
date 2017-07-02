'use strict'

let Gpio = require('onoff').Gpio;
let pin = new Gpio(4, 'out');

function led() {

  process.on('SIGINT', function() {
  	clearInterval(interval);
  	pin.writeSync(0);
  	pin.unexport();
  	console.log("\n\n\n-->App has been closed!\n\n-->Bye!");
  	process.exit();
  });

  function on() {
    console.log(`Led on`);
    // pin.write( 1, function() {
  	// 	console.log(`Led on`);
  	// });
  }

  function off() {
    console.log(`Led off`);
    // pin.write( 0, function() {
  	// 	console.log(`Led off`);
  	// });
  }

  return {
    on,
    off
  }

}

module.exports = led;
