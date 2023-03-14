function memoize(fn) {
    const cache = new Map();
    return function (...args) {
      const key = args.toString();
      console.log("fn called with", +key);
      console.log(cache);
      if (cache.has(key)) {
        return cache.get(key);
      }
      cache.set(key, fn(...args));
      return cache.get(key);
    };
  }
  
  function add(a, b) {
    return a + b;
  }
  
  function time(fn) {
    console.time();
    fn();
    console.timeEnd();
  }
  
  const memoizeAdd = memoize(add);
  
  time(() => memoizeAdd(100, 100));
  time(() => memoizeAdd(100, 200));
  time(() => memoizeAdd(100, 100));
  time(() => memoizeAdd(100, 200));

  
  //Output will be node /tmp/GwcpuSFJEX.js
/*
fn called with NaN
Map {}
default: 19.030ms
fn called with NaN
Map { '100,100' => 200 }
default: 1.149ms
fn called with NaN
Map { '100,100' => 200, '100,200' => 300 }
default: 0.465ms
fn called with NaN
Map { '100,100' => 200, '100,200' => 300 }
default: 0.375ms
*/ 