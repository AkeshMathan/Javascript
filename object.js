//How to declare object
var customerDetails1 = {
  name: "Akesh",
  age: 20,
  phone: 9443695080,
};
console.log(customerDetails1);
customerDetails1["id"] = "001";
console.log(customerDetails1);

var kongu = new Object();
kongu["fees"] = 100000;
kongu["accomodation"] = "Execelent";
kongu["food"] = "pretty Decent";
console.log(kongu);
console.log(kongu.food);
console.log(kongu["food"]);
