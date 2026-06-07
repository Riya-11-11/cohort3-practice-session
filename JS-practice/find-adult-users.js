// let users= [
// { name:"Ritik", age:20 },
// { name:"Aman", age:16 },
// { name:"Priya", age:25 }
// ];

// Create a function:
// getAdults(users)
// Return only users whose age is 18 or above.

let users = [
  { name: "Ritik", age: 20 },
  { name: "Aman", age: 16 },
  { name: "Priya", age: 25 },
];

function getAdults(users) {
  return users.filter((user) => user.age >= 18);
}

console.log(getAdults(users));
