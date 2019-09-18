/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding: the this keyword binds to the window object
* 2. Implicit binding: when a function is invoked it looks to the left of the dot.
* 3. New binding: uses the 'new' keyword to create a new object
* 4. Explicit binding: tells javascript to point to a certain value using call, apply or bind.
*
* write out a code example of each explanation above
*/

// Principle 1

function myFunction(){
  console.log(this.test);
}
myFunction();
const test = "Hello world";

// Principle 2

let myDog = {
  name: 'Princess',
  bark: 'Woof',
  dog: function(){
    console.log(this.bark);
  }
}

myDog.dog();

// Principle 3

function cat(meowing){
    this.thing = meowing;
}

let myCat = new cat('Meow');
console.log(myCat.thing);

// Principle 4

function cow(){
  console.log(this.moo);
}

let myCow ={
  name: 'Dinner',
  moo: 'mooooo!'
}

cow.call(myCow);