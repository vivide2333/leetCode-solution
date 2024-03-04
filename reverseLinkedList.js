// Define a function that takes the head of a linked list as a parameter
var reverseList = function(head) {
    // Initialize three pointers: prev, curr, and next
    let prev = null; // This will store the previous node
    let curr = head; // This will store the current node
    let next = null; // This will store the next node
  
    // Loop through the linked list until curr is null
    while (curr != null) {
      // Save the next node in a temporary variable
      next = curr.next;
      // Reverse the pointer of the current node to point to the previous node
      curr.next = prev;
      // Move the prev and curr pointers one step forward
      prev = curr;
      curr = next;
    }
    // Return the prev pointer as the new head of the reversed list
    return prev;
  };
  