class Node {
    constructor(key, value) {
      this.key = key; // the key of the node
      this.value = value; // the value of the node
      this.prev = null; // the pointer to the previous node
      this.next = null; // the pointer to the next node
    }
  }
  
  class LRUCache {
    constructor(capacity) {
      this.capacity = capacity; // the maximum size of the cache
      this.size = 0; // the current size of the cache
      this.cache = {}; // the hash map to store the keys and the nodes
      this.head = new Node(0, 0); // the dummy head node of the list
      this.tail = new Node(0, 0); // the dummy tail node of the list
      this.head.next = this.tail; // connect the head and the tail
      this.tail.prev = this.head; // connect the tail and the head
    }
  
    get(key) {
      if (this.cache[key]) { // if the key exists in the cache
        let node = this.cache[key]; // get the node
        this.remove(node); // remove the node from the list
        this.add(node); // add the node to the head of the list
        return node.value; // return the value of the node
      } else {
        return -1; // otherwise, return -1
      }
    }
  
    put(key, value) {
      if (this.cache[key]) { // if the key already exists in the cache
        let node = this.cache[key]; // get the node
        this.remove(node); // remove the node from the list
        node.value = value; // update the value of the node
        this.add(node); // add the node to the head of the list
      } else { // if the key is not in the cache
        let node = new Node(key, value); // create a new node
        this.cache[key] = node; // add the key and the node to the hash map
        this.add(node); // add the node to the head of the list
        this.size++; // increment the size of the cache
        if (this.size > this.capacity) { // if the cache is full
          let last = this.tail.prev; // get the last node in the list
          this.remove(last); // remove the last node from the list
          delete this.cache[last.key]; // delete the key and the node from the hash map
          this.size--; // decrement the size of the cache
        }
      }
    }
  
    add(node) {
      // this function adds a node to the head of the list
      let first = this.head.next; // get the first node in the list
      this.head.next = node; // connect the head and the node
      node.prev = this.head; // connect the node and the head
      node.next = first; // connect the node and the first node
      first.prev = node; // connect the first node and the node
    }
  
    remove(node) {
      // this function removes a node from the list
      let prev = node.prev; // get the previous node of the node
      let next = node.next; // get the next node of the node
      prev.next = next; // connect the previous node and the next node
      next.prev = prev; // connect the next node and the previous node
    }
  }
  