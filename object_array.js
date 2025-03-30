//Problem: Create an array containging diffrent type of teas.
let tea = ['green tea', 'black tea', 'oolong tea', 'white tea', 'Herbal Tea', 'milk tea']
//console.log(tea);
//Problem: Add "Chamomile Tea" to the exixting list of teas.
tea.push('Chamomile Tea');
//console.log(tea);

//problem: Remove "milk tea" from the list of teas.
 const  index = tea.indexOf('milk tea');
 //console.log(index); // 4
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
    if(tea !== "Herbale tea")
    {
        caffeinatedCount++;
    }
    return caffeinatedCount;
}
