/// Typed Array (Advanced JS concept)

//// Traversal

let arr = [10, 20, 30, 40];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//// Insertion

let arr = [10, 20, 40];

// insert 30 at index 2
arr.splice(2, 0, 30);

console.log(arr); // [10,20,30,40]

/// Deletion

let arr = [10, 20, 30, 40];

// delete element at index 1
arr.splice(1, 1);

console.log(arr); // [10,30,40]


/// Searching
//// Linear Search

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

console.log(linearSearch([10, 20, 30], 20)); // 1






