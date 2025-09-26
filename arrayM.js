console.log("Jambo, javascript executed by node");
// Arrays
const mates = ["Dennis","Moses","Joseph","Abel"];

console.log("The array has a length of " + mates.length );
mates.length = 3;
console.log(mates);

//array.toString method returns items separated by commas
console.log(mates.toString());
console.log(mates.join('|')); //works same as .toString()

console.log(mates.at(2));

console.log("The one that has been removed is " + mates.pop());
console.log(mates);
mates.push("Bob","Jim");
console.log(mates)
console.log(mates.shift() + " Has been removed from the array");
console.log(mates);
mates.unshift("Alice","Doe");
console.log(mates);