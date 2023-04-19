// Javascript program to rotate a linked list
var head;
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

// Function to rotate a linked list.
function rotate(k) {
  // let us consider the example
  // 10->20->30->40->50->60 - k=4
  // initialising 2 nodes temp and last
  var last = head;
  var temp = head;

  // if head is null or k==0 no rotation is required
  if (head == null || k == 0) return head;

  // Making last point to the last-node of the given
  // linked list in this case 60
  while (last.next != null) last = last.next;

  // Rotating the linked list k times, one rotation at a
  // time.
  while (k != 0) {
    // Make head point to next of head
    // so in the example given above head becomes 20
    head = head.next;

    // Making next of temp as NULL
    // In the above example :10->NULL
    temp.next = null;

    // Making temp as last node
    // (head)20->30->40->50->60->10(last)
    last.next = temp;
    last = temp;

    // Point temp to head again for next rotation
    temp = head;
    k--;
  }
}

function printList() {
  var temp = head;
  while (temp != null) {
    document.write(temp.data + " ");
    temp = temp.next;
  }
  console.log("\n");
}

function push(new_data) {
  // 1 & 2: Allocate the Node & Put in the data
  var new_node = new Node(new_data);

  // 3. Make next of new Node as head
  new_node.next = head;

  // 4. Move the head to point to new Node
  head = new_node;
}

for (let i = 60; i >= 10; i -= 10) push(i);

console.log("Given list : \n");
printList();

rotate(4);

console.log("Rotated Linked List : \n");
printList();
