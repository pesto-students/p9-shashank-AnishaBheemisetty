let Fib = {
  [Symbol.iterator]() {
    const n1 = 1,
      n2 = 1;

    return {
      // make the iterator an iterable
      [Symbol.iterator]() {
        return this;
      },

      next() {
        const current = n2;
        n2 = n1;
        n1 = n1 + current;
        return { value: current, done: false };
      },

      return(v) {
        console.log("Fibonacci sequence abandoned.");
        return { value: v, done: true };
      },
    };
  },
};

for (const v of Fib) {
  console.log(v);

  if (v > 50) break;
}
