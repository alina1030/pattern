//*************HALf PAYRAMID ************************//
/*let n = parseInt(prompt("enter the number")); 
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);*/

//****************HALF INVERTED PYRAMID****************//

let n = parseInt(prompt("enter the number")); // you can take input from prompt or change the value
let string = "";
for (let i = 0; i < n; i++) {
  // printing star
  for (let k = 0; k < n - i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

//*****************FULL PYRAMID ***************************//
/*let n = parseInt(prompt("enter the number"))// you can take input from prompt or change the value
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);*/

//****************************** Inverted Full Pyramid ***************************/

let n = 5; // you can take input from prompt or change the value
let string = "";
// External loop
for (let i = 0; i < n; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < 2 * (n-i) - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);



