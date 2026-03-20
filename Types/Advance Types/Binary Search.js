// Binary Search — Find Minimum in Rotated Sorted Array

function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
}

// Example
console.log(findMin([4,5,6,7,0,1,2])); // 0





