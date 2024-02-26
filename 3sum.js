function threeSum(nums) {
    const results = [];
    nums.sort((a, b) => a - b); // Sort the array
  
    for (let i = 0; i < nums.length - 2; i++) {
      if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
        let left = i + 1;
        let right = nums.length - 1;
  
        while (left < right) {
          const sum = nums[i] + nums[left] + nums[right];
          if (sum === 0) {
            results.push([nums[i], nums[left], nums[right]]);
            while (left < right && nums[left] === nums[left + 1]) left++;
            while (left < right && nums[right] === nums[right - 1]) right--;
            left++;
            right--;
          } else if (sum < 0) {
            left++;
          } else {
            right--;
          }
        }
      }
    }
  
    return results;
  }
  
  // Example usage:
  const nums = [-1, 0, 1, 2, -1, -4];
  console.log(threeSum(nums));
  