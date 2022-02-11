/*
var num1 = 2;

var sum = function(){
    var num2 = 3;
    var num = 6;
    return function(){
        return num1+num2; //if we not use num2 & num then there will be no closure
    }
}

var myFunc = sum();

console.dir(myFunc);
*/


/*
function bankAccount(initalBalance){
    var balance = initalBalance; //here, balance is closure
    return function(){
        return balance;
    }
}

var account = bankAccount(100000);

console.dir(account);
*/


/*
//If we use let instead of var in global scope then it will show in script after console.dir, it will not show in global scope but if we enclose the let into an self enclosing function then again it will return into closure

(function()
{let num1 = 2;
let num2 = 3;

var sum = function(){
    return num1 + num2;
}

console.dir(sum);
})();
*/


/*
function stopWatch(){
    var startTime = Date.now();

    function getDelay(){
        console.log(Date.now() - startTime);
    }
    
    return getDelay;
}

var timer = stopWatch();

for(var i = 0; i < 1000000; i++){
    var a = Math.random() * 1000000;
}

timer();

console.dir(timer);

timer = null; // for performance optimization here it will clear the reference if we don't need this timer function anymore. After that timer function will not work.

timer(); // Now, this will not work because of using timer = null, it clears the reference for performance optimization.
*/


/*
//Closure in asynchronous function

function async(){
    var a = 20;

    setTimeout(() => {
        console.log(a);
    }, 3000);
}

async();
*/


/*
var a;

function async(){
    
    a = 20;

    var myFunc = () => {
        console.log(a)
    };

    setTimeout(myFunc, 3000);

    console.dir(myFunc);
}

async();

a = 30; //here, function output should be 30 because of global scope value and setTimeout function come from web api to js main thread after that it will get the a = 30; and closure will take the variable reference.
*/


/*
//Closure in API request

function apiFunction(url){
    fetch(url).then((res) => {
        console.log(res);
    })
}

apiFunction('https://jsonplaceholder.typicode.com/todos/1'); //JSON placeholder test api url

console.log('I am here'); // here, it will show first because of asynchronous function and apiFunction will show after this.
*/



//Closure in for loop

for(var i = 0; i < 3; i++){

    const myFunc = () => {
      console.log(i)
    };

    console.log(i);
    console.dir(myFunc);
    setTimeout(myFunc, 3000);
}

console.log('after the loop'); //this will show at first then loop output will show.
