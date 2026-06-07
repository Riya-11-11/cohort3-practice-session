let employees = {
  aman: 25000,
  ritik: 50000,
  priya: 45000,
};

let max = 0;
let ans;

for (const key in employees) {
  if (employees[key] > max) {
    max = employees[key];
    ans = key;
  }
}
console.log(ans);
