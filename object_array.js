//Problem: Create an array containging diffrent type of teas.
let tea = ['green tea', 'black tea', 'oolong tea', 'white tea', 'Herbal Tea', 'milk tea']
//console.log(tea);
//Problem: Add "Chamomile Tea" to the exixting list of teas.
tea.push('Chamomile Tea');
//console.log(tea);

//problem: Remove "milk tea" from the list of teas.
 const  index = tea.indexOf('milk tea');
if (index > -1) {
    tea.splice(index, 1);
}
 //console.log(tea);

//Problem: Filter the list only includes teas that are caffeinted.

const caffe = tea.filter((tea )=> tea !== "Herbal Tea");
//console.log(caffe); 

//Problem: sort the list of teas in alfabetical order.
tea.sort();
//console.log(tea);

//Problem: Use a for loop to print  type of tea in the array.

for(let i =0; i<=tea.length; i++)
{
    console.log(tea[i]);
}

//Problem: Use a for loop to count how many teas are are caffeinated (exclusing "Herbal tea").

let caffeinatedCount = 0;
for(let i =0; i<=tea.length; i++)
{
    if(tea[i] !== "Herbale tea")
    {
        caffeinatedCount++;
    }
   
}

// problem: Use a for loop to create a new array with all tea names in uppercase.
let uppercaseTeas=[];
for(let i =0; i<=tea.length; i++)
{
   // uppercaseTeas.push(tea[i].toUpperCase())
}

// Problem: Use a for loop to find the tea name with the most charcters.

let longestTea =""
for(let i =0; i<tea.length; i++)
{
    if(tea[i].length > longestTea.length)
    {
        longestTea = tea[i];
    }
}

//console.log(longestTea);

//Problem: Use a for loop to reverse the order of the tea in the array.

let reversedTea = [];

for(let i = tea.length; i>=0; i--)
{
   reversedTea.push(tea[i]);
}
