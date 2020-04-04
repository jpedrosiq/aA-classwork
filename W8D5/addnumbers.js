// reader.question("What is your name?", function (answer) {
//     console.log(`Hello ${answer}!`);

//     // Close the reader, which will allow the program to end because it
//     // is no longer waiting for any events.
//     reader.close();
// })

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft > 0) {
        reader.question("Please put a number: ", function (answer) {

            sum += parseInt(answer);
            console.log(sum);
            numsLeft --;
            addNumbers(sum, numsLeft, completionCallback);
        })
    } else {
        completionCallback(sum);
        reader.close();
    }
}


addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
