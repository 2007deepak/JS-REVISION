let myArr = [1,2,3,4,5,6];


function sumArray(myArr)
{
    let sum = 0;
for (let i = 0; i < myArr.length; i++) {
  sum = sum + myArr[i];
}
return sum;
}
 let add = sumArray(myArr);

console.log(` my result is ${add}`);
//console.log(sumArray(myArr));


