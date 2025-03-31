
const person = {
    x : 10,
    firstName: "Deepak",
    lastName: "Kumar",
    hobies: [  'Gym', "coding"],
    isMarried: false,
    getFullName:function()
    {
        return "Deepak Kumar";
    },
    address:{
        city: "Varanasi",
        state: "Delhi",
        country: "India"
    }

}
//onsole.log(person.getFullName());
//console.log(person.address.city);
//console.log(person.address.state);

const remote ={
    color : "black",
    brand : "LG",
    price : 2000,
    turnOff : function(){

    },
    turnOn : function(){
        
    }

}

let p1 = {
fname : "Deepak",

}
let p2 = p1

p2.fname = "Kumar"
console.log(p1);
console.log(p2);





