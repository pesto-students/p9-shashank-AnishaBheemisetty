function nextLargerElement(arr, n) {
  var s = [];

  // iterating over the array
  for (var i = 0; i < arr.length; i++) {
    while (s.length > 0 && s[s.length - 1]["value"] < arr[i]) {
      // updating the array as per the stack top
      var d = s.pop();
      arr[d["ind"]] = arr[i];
    }
    // pushing values to stack
    s.push({ value: arr[i], ind: i });
  }

  // updating the array as per the stack top
  while (s.length > 0) {
    d = s.pop();
    arr[d["ind"]] = -1;
  }
  return arr;
}

// Driver Code
var arr = [1, 3, 2, 4];
var n = 5;

// Function call
console.log(nextLargerElement(arr, n));
