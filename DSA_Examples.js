/// Find Maximum Element

function findMax(arr) {
  let max = arr[0];

  for (let num of arr) {
    if (num > max) max = num;
  }

  return max;
}

console.log(findMax([3, 7, 2, 9])); // 9


/// Reverse Array

function reverseArray(arr) {
  let left = 0, right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
}

console.log(reverseArray([1, 2, 3, 4]));

//// Remove Duplicates

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));


//// Sum of Array

function sumArray(arr) {
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }

  return sum;
}

console.log(sumArray([1, 2, 3, 4])); // 10

/// Rotate Array (Right Rotation)

function rotateArray(arr, k) {
  k = k % arr.length;

  return arr.slice(-k).concat(arr.slice(0, -k));
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));
// [4,5,1,2,3]





