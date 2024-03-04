// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  
  // Reverse the nodes of a linked list in groups of k
  var reverseKGroup = function(head, k) {
    // If the list is empty or k is 1, return the head
    if (!head || k === 1) return head;
    // Create a dummy node to point to the head
    let dummy = new ListNode(-1);
    dummy.next = head;
    // Initialize previous, current, and count pointers
    let prev = dummy;
    let curr = head;
    let count = 0;
    // Loop through the list
    while (curr) {
      // Increment the count
      count++;
      // If the count is a multiple of k, reverse the sublist
      if (count % k === 0) {
        // Call the reverse function and update the previous pointer
        prev = reverse(prev, curr.next);
        // Update the current pointer to the next node
        curr = prev.next;
      } else {
        // Move the current pointer to the next node
        curr = curr.next;
      }
    }
    // Return the modified list
    return dummy.next;
  };
  
  // Reverse a sublist of a linked list
  var reverse = function(start, end) {
    // Initialize previous, current, and next pointers
    let prev = start.next;
    let curr = prev.next;
    let next;
    // Loop until the current node is the end node
    while (curr !== end) {
      // Save the next node
      next = curr.next;
      // Reverse the link
      curr.next = prev
      start.next = curr;
      // Move the current pointer to the next node
      curr = next;
    }
    // Connect the previous node to the end node
    prev.next = end;
    // Return the previous node
    return prev;
  };
  