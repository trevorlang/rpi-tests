let Gpio = require('onoff').Gpio;
let led = new Gpio(4, 'out');
let interval;
let led_interval = 50;

console.log("Hello!");

interval = setInterval(function() {

	// Set the new value to be 1 or 0 depending on the previous state
	let value = ( led.readSync() + 1 ) % 2;

	led.write( value, function() {
		console.log(`--> Changed state to: ${value}`);
	});

}, led_interval);

process.on('SIGINT', function() {
	clearInterval(interval);
	led.writeSync(0);
	led.unexport();
	console.log("\n\n\n-->App has been closed!\n\n-->Bye!");
	process.exit();
});
