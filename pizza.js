let numbereofGuest = 7;

let pizzaSize;
//small <=2
//medium <=4
//large <=6

if (numbereofGuest <= 2) {
  pizzaSize = "small";
}else if(numbereofGuest <= 4){
    pizzaSize = "medium";
}
else{
    // console.log("large");
    pizzaSize = "large";
}
console.log(pizzaSize);
