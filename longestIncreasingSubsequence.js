// Binary search helper function
function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] === target) return mid;
      else if (arr[mid] < target) low = mid + 1;
      else high = mid - 1;
    }
    return low;
  }
  
  // Main function
  function lengthOfLIS(nums) {
    // Edge case: empty array
    if (nums.length === 0) return 0;
  
    // Initialize helper array with first element
    let helper = [nums[0]];
  
    // Loop through the input array
    for (let i = 1; i < nums.length; i++) {
      // Find the position of the current element in the helper array
      let pos = binarySearch(helper, nums[i]);
  
      // If the element is larger than the last element in the helper array, append it
      if (pos === helper.length) {
        helper.push(nums[i]);
      }
      // Otherwise, replace the element at that position with the current element
      else {
        helper[pos] = nums[i];
      }
    }
  
    // Return the length of the helper array
    return helper;
  }

  console.log(lengthOfLIS([5,6,7,8,9,1,2]))
  