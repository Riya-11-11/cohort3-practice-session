let arr = [1, 2, 3, 2, 4, 2, 5, 1, 1, 1];

let count = {};
let max = 0;
let ans;

for (let i = 0; i < arr.length; i++) {
  let val = arr[i];
  if (count[val]) {
    count[val]++;
  } else {
    count[val] = 1;
  }

  if (count[val] > max) {
    max = count[val];
    ans = val;
  }
}

console.log(ans);
