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


//// Sparse Array

let arr = [];
arr[0] = 10;
arr[5] = 50;

console.log(arr); 
// [10, empty × 4, 50]

console.log(arr.length); // 6

//// Jagged Array (Irregular Array)

let jagged = [
  [1, 2],
  [3, 4, 5],
  [6]
];

console.log(jagged[1][2]); // 5


//// Circular Array (Conceptual)

class CircularArray {
  constructor(size) {
    this.arr = new Array(size);
    this.size = size;
  }

  get(index) {
    return this.arr[index % this.size];
  }

  set(index, value) {
    this.arr[index % this.size] = value;
  }
}

let c = new CircularArray(3);
c.set(0, 10);
c.set(3, 20); // overwrites index 0

console.log(c.get(0)); // 20


//// Prefix Sum Array (Important for DSA)

let arr = [1, 2, 3, 4, 5];
let prefix = [arr[0]];

for (let i = 1; i < arr.length; i++) {
  prefix[i] = prefix[i - 1] + arr[i];
}

console.log(prefix); // [1, 3, 6, 10, 15]

// Range sum (1 to 3)
let sum = prefix[3] - prefix[0];
console.log(sum); // 9




