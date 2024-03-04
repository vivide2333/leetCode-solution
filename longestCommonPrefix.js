// A function to find the longest common prefix among an array of strings
function longestCommonPrefix(strs) {
    // If the array is empty, return an empty string
    if (strs.length === 0) return "";
    // Initialize the prefix as the first string in the array
    let prefix = strs[0];
    // Loop through the rest of the strings in the array
    for (let i = 1; i < strs.length; i++) {
      // While the current string does not start with the prefix, shorten the prefix by one character
      while (strs[i].indexOf(prefix) !== 0) {
        prefix = prefix.slice(0, -1);
        // If the prefix becomes empty, return an empty string
        if (prefix === "") return "";
      }
    }
    // Return the final prefix
    return prefix;
  }
  
  // Test the function with some examples
  console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
  console.log(longestCommonPrefix(["dog","racecar","car"])); // ""
  console.log(longestCommonPrefix(["ab","abc","abcd"])); // "ab"
  