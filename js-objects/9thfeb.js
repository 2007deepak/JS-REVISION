//Problem : Create an object reoresenting a type of tea with thwe properties for name,type,and caffeine contant.

const teas = {
    name : "Green Tea",
    type: "Green",
    caffeineContent: "Low",
    isCaffeinated: true,
    isHerbal: false,    
}

//Problem: Accses and print the name and type properties of the tea objects.

console.log(teas.name);
console.log(teas.type);
// yadi "type": "Green " aise diya hai  to kuch is prakar se print hoga
console.log(teas["types"]);

//Problem: Add a new property origin to the tea objects".

teas.origin ="Assam";

//Problem: change the caffeine levelof the tea to "Medium".
teas.caffeine = "Medium";

//Problem: Remove the type property from the tea object.

delete teas.type;

//Problem: Check if the tea object has a property origin.

console.log(teas.hasOwnProperty("origin"));
console.log("origin" in teas);


//Problem : Use a for ...in loop to print all propertiies of the tea objecs.
for(let key in teas)
{
    console.log(`${key}:${teas[key]}`);
    
}

//Problem: Create a nested object  representing diffrent typs of teas and their properties.

 const teas = {
        greentea:{

         name:"Green Tea"
        },
        OolongTea:  {
            name: "Oolong Tea"
        },
 }

 //Problem: Create a copy  of the tea object.

const  newteas= {
     ...teas
}



