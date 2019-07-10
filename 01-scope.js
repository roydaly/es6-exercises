// Rewrite this code to make the console.logs accurate
// using the new ES6 variable declarations.
// For a BONUS, change the console.logs to use string
// template literals.

var alwaysTrue = true;

function myBarn(petMe) {
  var animals = {
    petMe: petMe,
  };
  
  if (alwaysTrue) {
    let animals = {
      petMe: "pig",
    };
    var greeting = 'This animal should be a pig; it is a: ' + animals.petMe + '.';
    console.log(greeting);
  }
  
  console.log('This animal should be a dog; it is a: ' + animals.petMe);  // 2
}

myBarn("dog");
