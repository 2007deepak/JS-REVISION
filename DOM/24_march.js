// let arr = [1,2,3,4,5,6,7,8,9,0];

// // console.log(arr[-1]);

// const user = {
//     name : "hitesh",
//     age:40,
//     password : "123",
//     // line 6 se 9 tak target hai

// };

// const proxyUser = new Proxy(user,{
//     get(target,prop)
//     {
//         console.log(prop);
//         if(prop === 'password'){
//             throw new Error("Access Denied");
//         }
        
//         return target[prop];
//     },
// });


// console.log(proxyUser.password);


 
//  how to writen interviwe question pollyfil ka proxy
function negativeIndex(){
    return  new Proxy(arr, {
        
        get(target, prop)
        {
            const index = Number(prop)
            {
                if(index <0){
                    return target[target.length + index]
                }
                
            }
            return target[index];
        },
        set(target,prop,value){

            const index = Number(prop)
            {
                if(index < 0)
                {
                    target[target.length + index] = value
                }else {
                    target[index] = value
                }
                return true
            }
        }
    })



}
let arr = [1,2,3,4,5,6,7,8,9,10];
 const newArr = negativeIndex(arr)
 console.log(arr[-1]);
 console.log(newArr[-1]);
 newArr[-1] = 22;
 console.log(newArr);
 // ismae bhi same answer aa jayega
 console.log(arr);
  // ismae bhi same answer aa jayega
  //beacuse of deep copy refrence pass ho raha hai
 
 
//     Promises ho gya hai ye 25 march wale class me hota hai


