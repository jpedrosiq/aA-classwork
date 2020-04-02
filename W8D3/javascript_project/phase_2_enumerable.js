Array.prototype.myEach = function (callback) {
  
    // debugger 
  for (let i = 0; i < this.length; i++) {
    (callback(this[i]));
  }

};

function doubler(num) {
  return num * 2;
};



// console.log(arr.myEach(doubler));


// function myEach(cb) {


// }


Array.prototype.myMap = function(callback) {

    let res = [];

    // console.log(this.myEach(callback))
    // debugger
    this.myEach(element => {
      res.push(callback(element))
    });

    return res;
}

// console.log(arr.myMap(doubler))

// this.array.forEach(element => {
//    res.push(callback(element))
// });

// arr.each do |banana|
//     result << callback(banana)
// end



Array.prototype.myReduce = function (callback, initialValue = this[0]) {

  let acc = initialValue;

    
  this.myEach(element => {
      acc += callback(element)
  });

  return acc;
}

let arr = [1, 2, 3, 4]

console.log(arr.myReduce(doubler)); // 20;
console.log(arr.myReduce(doubler, 3));  // 23;

