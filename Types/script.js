//// One-Dimensional Array (1D Array)

let arr = [10, 20, 30, 40, 50];

// Access
console.log(arr[2]); // 30

// Traverse
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}


//// Two-Dimensional Array (2D Array)


let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Access element
console.log(matrix[1][2]); // 6

// Traverse
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}


///// Multi-Dimensional Array

let arr3D = [
  [
    [1, 2],
    [3, 4]
  ],
  [
    [5, 6],
    [7, 8]
  ]
];

console.log(arr3D[1][0][1]); // 6


/// Static Array (Fixed Size Concept)


let size = 5;
let arr4 = new Array(size).fill(0);

arr4[0] = 10;
console.log(arr4);



///// Dynamic Array


let arr = [];

arr.push(10);
arr.push(20);
arr.push(30);

console.log(arr); // [10, 20, 30]

// Remove
arr.pop();
console.log(arr); // [10, 20]




