var car = {
  color: "blue",
  engine: "v6",
  style: "sedan"
}

// Given the object above, print out the following string using
// those object's properties and string template literals:
// "I drive a v6 sedan of the color blue."

console.log(`I drive a ${car.engine} ${car.style} of the color ${car.color}.`);
