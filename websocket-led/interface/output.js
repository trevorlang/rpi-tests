'use strict'

let Gpio = require('onoff').Gpio;

function Output(location) {

  this.pin = new Gpio(location, 'out');

  this.on = function() {
    console.log(`Led on`);
    this.pin.write( 1, function() {
  		console.log(`Led on`);
  	});
  }

  this.off = function() {
    console.log(`Led off`);
    this.pin.write( 0, function() {
  		console.log(`Led off`);
  	});
  }
}

module.exports = Output;


// process.on('SIGINT', function() {
//   clearInterval(interval);
//   pin.writeSync(0);
//   pin.unexport();
//   console.log("\n\n\n-->App has been closed!\n\n-->Bye!");
//   process.exit();
// });
