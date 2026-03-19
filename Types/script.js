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


