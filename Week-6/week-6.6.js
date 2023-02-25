function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    let closestSum = Infinity;
    
    for (let i = 0; i < nums.length - 2; i++) {
      let left = i + 1, right = nums.length - 1;
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
        if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
          closestSum = sum;
        }
        if (sum > target) {
          right--;
        } else {
          left++;
        }
      }
    }
    
    return closestSum;
  }
  
  // Example usage
  const nums = [-1, 2, 1, -4];
  const target = 1;
  console.log(threeSumClosest(nums, target)); // Output: 2
  