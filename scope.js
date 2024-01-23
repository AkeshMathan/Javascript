//local scope
for (let i = 0; i < 9; i++) {
  console.log(i + 1);
}
//console.log(i);

//block scope
var a = 10;
console.log(a);
{
  let a = 5;
  let b = 5;
  console.log(a);
  console.log(b);
}
console.log(a);
