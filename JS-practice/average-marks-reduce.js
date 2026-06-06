let marks = [80, 90, 70, 85, 95];

let total = marks.reduce(function (acc, curr) {
  return acc + curr;
}, 0); //0 is set initially to acc

let avg = total / marks.length;
console.log(avg);

//acc--> initialValue
