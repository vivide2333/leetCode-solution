// Function to find the longest consecutive sequence in an array
function longestConsecutiveSequence(arr) {
    // Create a set of all the elements in the array
    let set = new Set(arr);
    // Initialize the longest streak to 0
    let longestStreak = 0;
    // Loop through the array
    for (let num of arr) {
      // Check if the previous number is in the set
      if (!set.has(num - 1)) {
        // Start a new streak from this number
        let currentStreak = 1;
        // Check if the next numbers are in the set
        while (set.has(num + 1)) {
          // Increment the current streak and the number
          currentStreak++;
          num++;
        }
        // Update the longest streak if needed
        longestStreak = Math.max(longestStreak, currentStreak);
      }
    }
    // Return the longest streak
    return longestStreak;
  }
  