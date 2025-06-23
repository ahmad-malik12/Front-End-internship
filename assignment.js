const prompt = require("prompt-sync")();

////////////////. QUESTION 1    ////////////////////

/*

function multiply(num1, num2){
    return num1*num2;
}


const num1 = prompt("Enter number 1: ");
const num2 = prompt("Enter number 2: ");

console.log(multiply(num1, num2));

*/

////////////////      QUESTION 2      /////////////////

/*

function greeting(name){
    console.log(`Hello ${name}`)
}

name = prompt("Enter your name: ");
greeting(name);

*/


//////////////          QUESTION 3  ///////////////////


/*
let sumArray = (array) =>{
    let sum = 0;
    for (i=0; i<array.length;i++){
        sum = sum+array[i];
    }
    return sum;
}

array = [1,2,4,5,3];
console.log(sumArray(array));

*/


/////////////        QUESTION 4         /////////////

/*
function calculateBMI(weight,height){
    
    return (weight/(height*height));
}

weight = prompt("Enter your weight in kilograms: ");
height = prompt("Enter your height in metres: ");

console.log(calculateBMI(weight,height));

*/


//////////////        QUESTION 5        ////////////////

/*
let lengthString = (testString) =>{
    let i =0;
    for (char of testString){
        i++;
    }
    return i;
}

console.log(lengthString('OptimusFox'));


*/


////////////     Question 6         ///////////////

/*
function reverseString(inputString){
    stringArray = inputString.split("")
    console.log(stringArray)
    let j=stringArray.length -1;
    for (let i=0; i<j; i++){
        let temp = stringArray[j];
        stringArray[j] = stringArray[i];
        stringArray[i] = temp;
        // console.log(`${i} the array is ${stringArray}`)
        j--;
    }
    inputString = stringArray.join("");
    return inputString;
}

console.log(reverseString('Ahmad is working'));

*/


////////////    QUESTION 7       ////////////////

/*
const person = {
    firstName : 'Muhammad',
    lastName : 'Ahmad'
}

let printer = (person) =>{
    console.log(`Hello ${person.firstName} ${person.lastName}`)
    
}

printer(person);


*/


//////////  QUESTION 8      /////////////////


/*
function capitalize(string){
    firstLetter = string.substr(0,1).toUpperCase();
    // console.log(firstLetter);
    removeFirstLetter = string.substring(1)
    finalString = firstLetter + removeFirstLetter;
    return finalString;

}

console.log(capitalize('this is ahmad'));

*/


 ////////////////  QUESTION 9     ////////////////


/*
let capitalizeArray = (stringArray)=>{
    let capitalizedArray = stringArray.map((x) => x.toUpperCase());
    return capitalizedArray;
}

stringArray = ['ahmad', 'Muhammad', 'talha', 'optimus fox'];


console.log(capitalizeArray(stringArray));


*/


////////////       QUESTION 10        /////////////////

function isPalindrome(string){
    let j = string.length - 1;
    for(let i =0; i<j; i++){
        if(string.substr(i,1)===string.substr(j,1)){
            j--;
        } else{
            return false;
        }
    }
    return true;
}
string = 'ahamd';
if(isPalindrome(string)){
    console.log(`${string} is Palindrome`)
} else{
    console.log(`${string} is not a Palindrome` )
}