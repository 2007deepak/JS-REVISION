function run(name) {
  console.log(`Hello ${name}`);
}
run("Deepak");

let globalVar = "I am global ";

function modifyGlobal() {
  globalVar = "I am modified";
  let blockScopedVar = "I am blocked-scoped";
  //   console.log(blockScopedVar);
}
modifyGlobal();
// console.log(globalVar);

// ye bind and call and this ka use kiya hai //
let person = {
  name: "Deepak",
  greet: function () {
    console.log(`hello ${this.name}`);
  },
};

let person2 = {
  name: "hitesh",
};
// person.greet.call(person2);
const bindGreet = person.greet.bind(person2);
bindGreet();
console.log(bindGreet());


// SetTimeout ka use krke bind ko smajhna//

const obj = {
    personName : 'deepak',
  greet: function () {
    console.log(`hello ${this.personName}`);
  },
};
// console.log("hi");
setTimeout(obj.greet.bind(obj), 5 * 1000);
// console.log("bye");


//Promices//
//  We are check this all process on JavaScript Visualozer //
console.log("HI");

setTimeout(function timeFn(){
    console.log("hello after 0s");
}, 0);

Promise.resolve().then(function p1() {
    console.log('1. Promise Resolve hogya');

    Promise.resolve().then(function p2() {
      console.log("1. Promise Resolve hogya");

      Promise.resolve().then(function p3() {
        console.log("1. Promise Resolve hogya");

        Promise.resolve().then(function p4() {
          console.log("1. Promise Resolve hogya");

         
        });
      });

    });

});

console.log("BYE");


console.log('Age is ', age);

//Dead Zone
//ye hoiste hota hai we can not access  beacuse of temporial jone
let age = 24;

//ReferancialEoorr; age is not Define
//cannot access 'age' before initilization