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


//// Binary search (Sorted Array)

function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}

console.log(binarySearch([10, 20, 30, 40], 30)); // 2



//// Updating

let arr = [10, 20, 30];
arr[1] = 25;

console.log(arr); // [10,25,30]





