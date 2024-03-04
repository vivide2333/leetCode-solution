// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
  
  // Function to merge two sorted linked lists
  function mergeTwoLists(l1, l2) {
    // Create a dummy head node to store the merged list
    let dummyHead = new ListNode();
    // Create a pointer to track the current node of the merged list
    let current = dummyHead;
    // Loop until both lists are exhausted
    while (l1 && l2) {
      // Compare the values of the two lists and append the smaller one to the merged list
      if (l1.val < l2.val) {
        current.next = l1;
        l1 = l1.next;
      } else {
        current.next = l2;
        l2 = l2.next;
      }
      // Move the pointer to the next node of the merged list
      current = current.next;
    }
    // If one list is longer than the other, append the remaining nodes to the merged list
    current.next = l1 || l2;
    // Return the head of the merged list, skipping the dummy node
    return dummyHead.next;
  }
  