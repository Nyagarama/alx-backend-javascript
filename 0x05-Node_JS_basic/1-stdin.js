// setup the readline interface
const queryline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// check if we are in interactive mode (accepting input from the keyboard)
const inInteractiveMode = process.stdin.isTTY;

if (inInteractiveMode) {
  // print the first message and accept the name as input and print the name
  queryline.question('Welcome to Holberton School, what is your name?\n', (yourName) => {
    console.log(`Your name is: ${yourName}`);
    queryline.close();
  });
} else {
  // construct the name character by character
  let name = '';
  process.stdin.on('data', (character) => {
    name += character.toString().trim();
  });

  process.stdin.on('end', () => {
    console.log(`Your name is: ${name}`);
    queryline.close();
  });
}
