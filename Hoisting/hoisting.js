//Hoisting In JS
// Hoisting means for where we use our variable access as like as scope
//Topic Covered below
// Hoisting
//Var vs let (and const)
//function


/*
//var in hoisting

// In JS variable var is compile first if we write it after console

//here we declare a and assign the value after console then it will show undefined. Because in JS if it is get var a then it is allocate the space with the undefined value and this is called basic hoisting and last console will show the value.

var a;

console.log(a);

a = "Bangladesh";

console.log(a);
*/


/*
//let in hoisting
//here, let a declaration is also go up and compile first as like as var. but the undefined value assign after console and after that it will show the value Bangladesh.
//for let the undefined value assign where the let declaration occured this is the difference between var and let

let a; //here it will show undefined value but after console it will show reference error
console.log(a);
//let a = "Bangladesh";
*/



/*

//here, if we use var in the fucntion then output should be Java and if we use let then output is as expected and because of let it will not run into if scope just return language so we get our result as expected

let LANGUAGE = "Java";
let language = "JavaScript";

function getLanguage(){
    if(!language){
        var language = LANGUAGE;
    }
    return language;
}

console.log(`I Love ${getLanguage()}`);
*/


/*

//function hoisting
//function is also work as like as variable if we call function before the defination of the function then because of hoisting it will show output.

myFunc();

function myFunc(){
    console.log(`I Love JavaScript`);
}
*/



/*

//In below function hoisting is also occured here, we also declare var after assigned value but it works fine because of hoisting. As we know that var declaration goes up of the scope because of hoisting. And here, we also know that from scope below assigned value it will search in the it's parent global scope for the var declaration and also create a var declaration by default.  

myFunc();

function myFunc(){
    language = 'JavaScript';
    var language;
    console.log(language);
}

*/


/*

//Here, in function expression it will not work as like as normal function because of variable assigned function and also we know that after declare variable in let and const the undefined value assigned in the declaration line so, here the declaration goes up of the function call but can not create the undefined value for function call so, after that it will find the function call where are no value so it will show reference error.

myFunc();
const myFunc = function(){
    let language = 'JavaScript';
    console.log(language);
}
*/





