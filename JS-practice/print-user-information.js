// Print:
// Name: Ritik;
// Age: 20;
// City: Bhopal;

let user = {
  name: "Ritik",
  age: 20,
  city: "Bhopal",
};

//Object.keys() ---> name, age, city
for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}
