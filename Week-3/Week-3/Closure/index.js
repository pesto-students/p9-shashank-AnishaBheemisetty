function createIncrement() {
  const count = 0;
  function increment() {
    count++;
  }
  const message = `Count is ${count}`;
  function log() {
    console.log(message);
  }

  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged?

/* 'Count is 0' is logged to console.

increment() function has been called 3 times, effectively incrementing count to value 3.
message variable exists within the scope of createIncrement() function. Its initial value is 'Count is 0'. 
However, even if count variable has been incremented a few times, message variable always holds 'Count is 0'.
log() function is a closure that captures message variable from the createIncrement() scope. 
console.log(message) logs 'Count is 0' to console.
*/
