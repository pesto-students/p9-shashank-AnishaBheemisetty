function createStack() {
  return {
    items: [],
    push(item) {
      this.items.push(item);
    },
    pop() {
      return this.items.pop();
    },
  };
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();
stack.items;
stack.items = [10, 100, 1000];
console.log(stack);

//This function stack can work as expected but where as everything is accessed.

//The stack works as expected, but with one small problem. Anyone can modify items array directly because stack.
//items property is exposed.

//That’s an issue since it breaks the encapsulation of the stack: only push() and pop() methods should be public,
// but stack.items or any other details shouldn’t be accessible.

function createStackEncapsultion() {
  const items = [];
  return {
    push(item) {
      items.push(item);
    },
    pop() {
      return items.pop();
    },
  };
}

const stack = createStack();
stack.push(10);
stack.push(5);
console.log(stack.pop()); // => 5

console.log(stack.items); // => undefined

//The output here  after this change, there is no way to access or modify items array ,from the outside of createStack() scope.

//items is now a private variable, and the stack is encapsulated: only push() and pop() method are public.
//push() and pop() methods, being closures, capture items variable from createStack() function scope.
