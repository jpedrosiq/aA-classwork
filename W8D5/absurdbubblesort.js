// reader.question("What is your name?", function (answer) {
//     console.log(`Hello ${answer}!`);

//     // Close the reader, which will allow the program to end because it
//     // is no longer waiting for any events.
//     reader.close();
// })


const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
    // Prompt user to tell us whether el1 > el2; pass true back to the
    // callback if true; else false.
    let userAnswer = true;
    reader.question(`Is ${el1} greater than ${el2}?`, function (answer) {
        reader.close();
        if (answer === "yes") {
            // console.log("YO");
            userAnswer = true;
        } 
        // console.log("BRO")
        userAnswer = false;
})
    return userAnswer;
}
console.log(askIfGreaterThan(1, 2));
// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    // Do an "async loop":
    // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
    //    know whether any swap was made.
    if (i === arr.length -1) {
        outerBubbleSortLoop;
    } else {
        if (askIfGreaterThan(arr[i], arr[i+1])) {
            console.log("asdfas");
            [arr[i], arr[i + 1]]  = [arr[i+1], arr[i]];
            madeAnySwaps = true;
            console.log(arr);
        }
        i++;
        innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
    }
    // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
    //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
    //    continue the inner loop. You'll want to increment i for the
    //    next call, and possibly switch madeAnySwaps if you did swap.
}
    // let a = [1, 4, 3, 2];
    // innerBubbleSortLoop(a, 1, false);

    
// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
    function outerBubbleSortLoop(madeAnySwaps) {
        // Begin an inner loop if you made any swaps. Otherwise, call
        // `sortCompletionCallback`.
    }

    // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 1], function (arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    reader.close();
});
