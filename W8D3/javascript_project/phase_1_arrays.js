// Arrays - Phase: 1


Array.prototype.uniq = function() {

    let result = [];
    for(let i = 0; i < this.length; i++) {
        if (result.indexOf(this[i]) === -1) {
            result.push(this[i]);
        }
        
    }
    return result
}

// console.log([1, 2, 2, 3, 3, 3].uniq()) // [1, 2, 3]

Array.prototype.twoSum = function() {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    let firstPair = this[i];

    for (let j = i + 1; j < this.length; j++) {
      let secPair = this[j];

      if (firstPair + secPair === 0) {
        result.push([i, j]);
      }
    }
  }

  return result;
}

// console.log([3, 2, -3, 0, -2].twoSum()); // [[0, 2], [1, 4]]

Array.prototype.transpose = function() {

    let res = new Array(this[0].length).fill("pLACEHODLER").map(el => new Array());
    for(let i = 0; i < this.length; i++) {              // i = 0
        for(let j = 0; j < this[i].length; j++) {       // j = 0
            res[j][i] = this[i][j]
        }
    }
    return res;
}

console.log([[1,2,3], [4,5,6]].transpose()); // [[1,4],[2, 5],[3,6]]

