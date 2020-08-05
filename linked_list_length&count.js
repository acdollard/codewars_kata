function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function length(head) {
  if(head === null){
    return 0
  }
  
  let count = 1
  
  while(head.next !== null){
  count ++;
  head = head.next
  }
  
  return count
  
  }
  
  function count(head, data) {
    // Your code goes here.
    if(!head){
    return 0
  }
  
  let count = 0;
  
  while(head.next !== null){
  if(head.data === data){
  count ++;
  }
  head = head.next;
  }
  
  if(head.data === data){
  count ++;
  }