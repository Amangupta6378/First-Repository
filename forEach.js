let arr = [2,6,4]

//ForEach loop --->

arr.forEach(function(index, element, arr){
    console.log(element, index, arr);
})

arr.forEach( (arr, elements, index) => {
    console.log("arrow",arr, elements, index);
})

const heros = ['rahul', 'pankaj', 'aman', 'basanti', 'gabbar','prathiban'];
heros.forEach(function(elements, index, hero){
    console.log(index,elements.toUpperCase());

} )


//Map loop --->

heros.map(function(elements, index, heros){
    console.log(elements.toUpperCase(), index,)
})

//Filter --->
const herosWithAn =heros.filter((elements) => {

    return elements.endsWith('an')
})
console.log(herosWithAn);


//Shopping cart

const cartBill = [23,4,3254,464,34,34,];
const sumOfCartBill = cartBill.reduce((prev,curr) => prev + curr,0)
console.log(sumOfCartBill);


//Every---> check if the values are numebers 

const gameScore = [30,200,46,34,53,43,304];
const gameScoreCheck = gameScore.every((v) => typeof v === 'number')
console.log("check:", gameScoreCheck);

//find score above 200
const above200 = gameScore.find((score) => score>200)
console.log(above200);

const SumOfGame = gameScore.reduce((last,next) => last+next);
console.log(SumOfGame)

gameScore.forEach((elements,index) => {
    console.log(index,elements);
})

const above30 = gameScore.find((score) => score>30);
console.log(above30);

//some--->
const even = gameScore.some((element) => element%2 == 0)
