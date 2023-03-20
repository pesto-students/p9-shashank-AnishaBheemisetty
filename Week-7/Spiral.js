function print(arr, i, j, m, n) {
  // If i or j lies outside the matrix
  if (i >= m || j >= n) return;

  // Print First Row
  for (let p = j; p < n; p++) {
    console.log(arr[i][p] + " ");
  }

  // Print Last Column
  for (let p = i + 1; p < m; p++) {
    console.log(arr[p][n - 1] + " ");
  }

  // Print Last Row, if Last and
  // First Row are not same
  if (m - 1 != i) {
    for (let p = n - 2; p >= j; p--) {
      console.log(arr[m - 1][p] + " ");
    }
  }

  // Print First Column, if Last and
  // First Column are not same
  if (n - 1 != j) {
    for (let p = m - 2; p > i; p--) {
      document.write(arr[p][j] + " ");
    }
  }
  print(arr, i + 1, j + 1, m - 1, n - 1);
}

// function call
const arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
const r = arr.length;
const c = arr[0].length;

print(arr, 0, 0, r, c);
