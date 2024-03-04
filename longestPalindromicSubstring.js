function longestPalindrome(s) {
    // Initialize the start and length of the longest palindrome
    let start = 0;
    let length = 0;
    // Loop through the string and check each center
    for (let i = 0; i < s.length; i++) {
      // Check odd-length palindromes with i as the center
      let len1 = expandFromCenter(s, i, i);
      // Check even-length palindromes with i and i+1 as the center
      let len2 = expandFromCenter(s, i, i + 1);
      // Update the start and length if a longer palindrome is found
      let len = Math.max(len1, len2);
      if (len > length) {
        start = i - Math.floor((len - 1) / 2);
        length = len;
      }
    }
    // Return the longest palindrome substring
    return s.slice(start, start + length);
  }
  
  // Helper function to expand a palindrome from the center
  function expandFromCenter(s, left, right) {
    // Expand the palindrome while the characters are equal and within bounds
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    // Return the length of the palindrome
    return right - left - 1;
  }

  console.log(longestPalindrome('abccbaabcdefg')  )
  