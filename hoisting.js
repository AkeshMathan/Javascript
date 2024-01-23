//variable hoisting
// console.log(a);
// var a = 10; //undefined

// console.log(b);
// let b = 10; //reference error

//Functional Hoisting
konguclg(5, 10);
function konguclg(a, b) {
  for (i = a; i < b; i++) {
    if (i % 2 == 0) {
      console.log("The number", i, "is even");
    } else {
      console.log("The number", i, "is odd");
    }
  }
}
