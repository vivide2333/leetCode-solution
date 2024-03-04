// Function to swap two elements in an array
function swap(arr, i, j) {
    console.log('swap', i,j);
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
  // Function to partition the array around a pivot element
  function partition(arr, left, right) {
    console.log('partition', left, right)
    // Choose the middle element as the pivot
    let pivot = arr[left];
    // Initialize the partition index as the leftmost index
    let leftPt = left;
    let rightPt = right + 1;
    // Loop through the array from left to right
    while(true) {
      while(arr[++leftPt] > pivot) {
        if(leftPt === right)break
      }
      while(arr[--rightPt] < pivot) {
        if(rightPt === left) break
      }

      if (leftPt >= rightPt) {
        break
      }
      swap(arr, rightPt, leftPt);
    }
   
    // Swap the pivot element with the element at the partition index
    swap(arr, left, rightPt);
    // Return the partition index
    return rightPt;
  }
  
  // Function to find the kth largest element in an unsorted array
  function findKthLargest(arr, k) {
    // Initialize the left and right pointers as the bounds of the array
    let left = 0;
    let right = arr.length - 1;
    // Loop until the left and right pointers meet
    while (left <= right) {
      // Partition the array and get the partition index
      let pIndex = partition(arr, left, right);
      console.log('pIndex', pIndex)
      console.log('arr', arr)
      // If the partition index is equal to k - 1, we have found the kth largest element
      if (pIndex === k - 1) {
        // Return the element at the partition index
        return arr[pIndex];
      }
      // If the partition index is greater than k - 1, we need to search in the left partition
      else if (pIndex > k - 1) {
        // Update the right pointer to be one less than the partition index
        right = pIndex - 1;
      }
      // If the partition index is less than k - 1, we need to search in the right partition
      else {
        // Update the left pointer to be one more than the partition index
        left = pIndex + 1;
      }
    }
    // If we reach here, the array is empty or k is out of range
    return -1;
  }
  
  // Example array
  let arr = [1,5,2,3,4];
  // []
  // Example k
  let k = 3;
  // Call the function and print the result
  console.log(findKthLargest(arr, k)); // 5
