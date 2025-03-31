
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
console.log(person.getFullName());
