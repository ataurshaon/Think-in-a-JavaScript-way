
//Scope

//Here, var x = 23; in global scope means parent scope and myFunc is it's local scope. From myFunc we can access global scope variable value but we can't access local scope variable value from global scope but if we only assign value in local scope then it can be accessed from global scope because by default var declaration happened in the global scope if we not declare var in the local scope. In local scope if we assign x value without declare var it will change the global scope x value.

//If we assign same variable name value without var declaration in local scope then it will also change the value of global scope.

// if we only write x = 10; in local scope without declare var then in JS it create var declaration in global scope automatically.

//"use strict" at the top for resolve the above problem.

//"use strict"

//Parent er dunia
var x = 23;

function myFunc(){
    //myFunc/child er dunia
     y = 10;
    console.log(`${x} from myFunc`);
}

myFunc();

console.log(x);
console.log(y);