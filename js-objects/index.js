
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
console.log(person.address.city);
console.log(person.address.state);

