function sum_1() {
    debugger
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum += num;
    }
    return sum;
}

function sum_2(...args) {
    let sum = 0;
    // console.log(args);
    for (let i = 0; i < args.length; i++) {
        const num = args[i];
        sum += num;
    }
    return sum;
}

// let array = [1,2,3,4,5];
// console.log(sum_1([1,2,3]));
// console.log(sum_1([1,2,3,4]));

// console.log(sum_2(1,2,3));
// console.log(sum_2(1,2,3,4));



Function.prototype.myBind_1 = function (ctx) {
    let bindArgs = Array.from(arguments).slice(1);
    let that = this;
    return function () {
        return that.apply(ctx, bindArgs.concat(Array.from(arguments)));
    };
};

Function.prototype.myBind_2 = function (ctx, ...bindArgs) {
    // let bindArgs = arguments.slice(1);
    let that = this;
    return function (...tempArgs) {
        return that.apply(ctx, bindArgs.concat(tempArgs));
    };
};


function curriedSum(numArgs) {
    let numbers = [];

    function _curriedSum(number) {
        numbers.push(number);

        if (numbers.length === numArgs) {
            let sum = 0;

            for (let i = 0; i < numbers.length; i++) {
                sum += numbers[i];
            }

            return sum;

        } else {
            console.log(this);
            return _curriedSum;
        }
    }

    return _curriedSum;
}

// const sums = curriedSum(4);
// console.log(sums(5)(30)(20)(1)); // => 56


Function.prototype.curry1 = function(numArgs) {

    let numbers = [];
    let that = this;

    function _curriedSum(number) {

        numbers.push(number);
        if (numbers.length === numArgs){
            return that.apply(null, numbers);
        } else {
            return _curriedSum;
        }

    }
    return _curriedSum;
};


Function.prototype.curry2 = function(numArgs) {

    let numbers = [];
    let that = this;

    function _curriedSum(number) {

        numbers.push(number);
        if (numbers.length === numArgs){
            return that(...numbers);
        } else {
            return _curriedSum;
        }

    }
    return _curriedSum;
};

// const sum = curry1([4,7,3,5,7]);
// console.log(sum); // => 56
// console.log((5,30,20,1).curry1(2));

const test = sum_1.curry2(4);
console.log(test(1));
console.log(test(1));
console.log(test(1));
console.log(test(1));