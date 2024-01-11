const array1= [3,5,63,75]
const array2 =[ 35,64,54,636,56]

const array11 = array1.forEach((elements,index) => {
    console.log(index,elements )
})

const array22= array2.forEach(function(elements, index){
    console.log(index,elements);
} )

// const concatArray = array1.concat(array2);
// console.log(concatArray); 


//Spread Operator --->
const newConcat = [...array1,...array2];
console.log(newConcat);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//Rest operator
 function manyArguments(){
    console.log(typeof arguments)
    let args = Array.from(arguments)
    let finalArray = args.map(e=> e)
    console.log(finalArray);
 }

 function manyArguments2(...args){
    console.log(typeof args)
    let finalArr = args.map(e=>e);
    console.log(finalArr)
 }

//  manyArguments(3,63,5,3);
//  manyArguments2(345,34,56,34,45,63,4636,36,53)

//  ************************************** 

let names = ["superman", "flash"]
const newNames = ["Batman","...names", "thor"]

const sitename = "pwskills"; 
console.log([...sitename]);

function pwskills(...values){
    return values
}

console.log(pwskills("superman", "flash"));

 

