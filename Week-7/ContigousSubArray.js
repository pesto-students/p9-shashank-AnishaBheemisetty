function maxSubArraySum(a, size) {
  let max_so_far = Number.MIN_VALUE,
    max_ending_here = 0;

  for (i = 0; i < size; i++) {
    max_ending_here += a[i];
    //max_ending_here is 4
    if (max_so_far < max_ending_here) {
      //max_so_far is 4-1=3
      //as max_so_far is less than max_ending_here
      //max_ending here is 4 so max_so_far is 4
      max_so_far = max_ending_here;
    }

    if (max_ending_here < 0) {
      max_ending_here = 0;
    }
  }
  console.log(max_so_far);
}

// Driver code

const a = [4, -1, 2, 1];
const n = a.length;
maxSubArraySum(a, n);

// Time Complexity - O(n)
// Space Complexity - O(1)
