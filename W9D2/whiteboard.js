// PROBLEM 1:
// You are climbing a stair case.It takes n steps to reach to the top.
// Each time you can either climb 1 or 2 steps.In how many distinct ways can you climb to the top ?
//     Note : Given n will be a positive integer.
//         Example 1:
// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:
// Input: 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

function climbingStair(n) {
    if (n === 2 || n === 3) {
        return n
    }
    return climbingStair(n-1) + climbingStair(n-2)
}


// n = 4
// 1 step + 1 step + 1 step + 1 step
// 2 step + 1 step + 1 step
// 1 step + 2 step + 1 step
// 1 step + 1 step + 2 step
// 2 step + 2 step
// output 5

// n = 5
// 1 step + 1 step + 1 step + 1 step + 1 step
// 2 step + 1 step + 1 step + 1 step
// 1 step + 2 step + 1 step + 1 step
// 1 step + 1 step + 2 step + 1 step
// 1 step + 1 step + 1 step + 2 step
// 2 step + 2 step + 1 step
// 2 step + 1 step + 2 step
// 1 step + 2 step + 2 step
// output 8

// 2 -> 2
// 3 -> 3
// 4 -> 5
// 5 -> 8

console.log(climbingStair(2));
console.log(climbingStair(3));
console.log(climbingStair(5));
console.log(climbingStair(6));

