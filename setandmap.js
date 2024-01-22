a = new Set(["a", "b", "c"]);
for (i of a) {
  console.log(i);
}
for (i in a) {
  console.log(i);
}
console.log(a);

//map

b = new Map([["id", "21ECR010"]]);
for (i in b) {
  console.log(i);
}
for (i of b) {
  console.log(i);
}
console.log(b);
console.log(b.has("id"));
b.set("name", "Akesh");
console.log(b);
b.delete("name");
console.log(b);
