/// Monotonic Stack — Next Greater Element



function nextGreaterElement(nums) {
  let result = new Array(nums.length).fill(-1);
  let stack = [];

  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
      let index = stack.pop();
      result[index] = nums[i];
    }
    stack.push(i);
  }

  return result;
}

// Example
console.log(nextGreaterElement([2,1,2,4,3])); 
// [4,2,4,-1,-1]




