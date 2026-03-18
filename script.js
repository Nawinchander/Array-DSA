///Types of Arrays


//// One-Dimensional Array (1D)

let arr = [10, 20, 30, 40];
console.log(arr[2]); // 30

///// Multi-Dimensional Array (2D / Matrix)

let matrix = [
  [1, 2],
  [3, 4],
  [5, 6]
];

console.log(matrix[1][0]); // 3


//// Dynamic Array (Resizable)


let arr = [1, 2, 3];
arr.push(4); // add
arr.pop();   // remove

console.log(arr); // [1,2,3]


//// Sparse Array

let arr = [];
arr[0] = 10;
arr[5] = 50;

console.log(arr.length); // 6




