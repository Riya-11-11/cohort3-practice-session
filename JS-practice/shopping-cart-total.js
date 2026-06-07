// let cart= [
// { name:"Mouse", price:500, qty:2 },
// { name:"Keyboard", price:1000, qty:1 },
// { name:"Monitor", price:10000, qty:1 }
// ];

// Create a function:
// getCartTotal(cart)

// Output:
// 12000

// What is this question asking?
// Each item has:
// price × quantity
// Calculate total bill.

let cart = [
  { name: "Mouse", price: 500, qty: 2 },
  { name: "Keyboard", price: 1000, qty: 1 },
  { name: "Monitor", price: 10000, qty: 1 },
];

function getCartTotal(cart) {
  return cart.reduce((acc, curr) => {
    return acc + curr.price * curr.qty;
  }, 0);
}

console.log(getCartTotal(cart));
