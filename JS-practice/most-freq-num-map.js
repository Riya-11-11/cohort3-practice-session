let arr = [1, 2, 3, 2, 4, 2, 5, 1, 1, 1];

let map = [];
let max = 0;
let ans;

for (let i = 0; i < arr.length; i++) {
  let val = arr[i];
  if (map[val]) {
    map[val]++;
  } else {
    map[val] = 1;
  }

  if (map[val] > max) {
    max = map[val];
    ans = val;
  }
}

console.log(ans);
