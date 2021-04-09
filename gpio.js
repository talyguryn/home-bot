const PORT = 4;

var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var LED = new Gpio(PORT, 'out'); //use GPIO pin 4, and specify that it is output
// var blinkInterval = setInterval(blinkLED, 500); //run the blinkLED function every 250ms

function toggleLED() { //function to start blinking
    if (LED.readSync() === 0) { //check the pin state, if the state is 0 (or off)
        LED.writeSync(1); //set pin state to 1 (turn LED on)
    } else {
        LED.writeSync(0); //set pin state to 0 (turn LED off)
    }
}

toggleLED();

// function endBlink() { //function to stop blinking
//     clearInterval(blinkInterval); // Stop blink intervals
//     LED.writeSync(0); // Turn LED off
//     LED.unexport(); // Unexport GPIO to free resources
// }

// setTimeout(endBlink, 10000); //stop blinking after 5 seconds
