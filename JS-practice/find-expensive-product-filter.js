// find products greater than 300

let arr = [100, 250, 500, 150, 700];

let ans = arr.filter(function (price) {
  return price > 300;
});

console.log(ans);
