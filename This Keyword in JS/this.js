//JavaScript 'this' keyword tutorial in Bangla - .call(), .apply() and .bind()
//Rule
//Implicit binding
//Explicit binding
//new binding
//window binding


/*
//Implicit binding
var shaon = {
    name : 'Shaon',
    age : 30,
    printPlayerName : function(){
        console.log(this.name);
    }
}

shaon.printPlayerName();
*/

/*
//Another example
var printPlayerNameFunction = function(obj){
    obj.printPlayerName = function(){
        console.log(this.name);
    };
};

var shaon = {
    name : 'Shaon',
    age : 30,
}

var ovi = {
    name : 'ovi',
    age : 29,
}

printPlayerNameFunction(shaon);
printPlayerNameFunction(ovi);

shaon.printPlayerName();
ovi.printPlayerName();
*/


/*
//Another Example

var Person = function(name, age){
    return {
        name: name,
        age: age,
        printName: function(){
            console.log(this.name);
        },
    };
};

var shaon = Person('Shaon', 30);
shaon.printName();
*/

/*
//Another example

var Person = function(name, age){
    return {
        name: name,
        age: age,
        printName: function(){
            console.log(this.name);
        },
        father: {
            name: 'Mr. XXX',
            printName: function(){
                console.log(this.name);
            }
        }
    };
};

var shaon = Person('Shaon', 30);
shaon.printName();
shaon.father.printName();
*/


/*
//Explicit binding
//call

var printName = function(v1, v2, v3){
    console.log(`${this.name} is ${v1}, ${v2} & ${v3}`);
}

var shaon = {
    name: 'Shaon',
    age: 30,
};

var v1 = 'Handsome';
var v2 = 'All Rounder';
var v3 = 'Best Player';

printName.call(shaon, v1, v2, v3);

*/

/*
//Another Example
//apply

var printName = function(v1, v2, v3){
    console.log(`${this.name} is ${v1}, ${v2} & ${v3}`);
}

var shaon = {
    name: 'Shaon',
    age: 30,
};

var v1 = 'Handsome';
var v2 = 'All Rounder';
var v3 = 'Best Player';

var v = [v1, v2, v3];

printName.apply(shaon, v); //for array use apply instead of call
*/

/*
//Another Example
//bind

var printName = function(v1, v2, v3){
    console.log(`${this.name} is ${v1}, ${v2} & ${v3}`);
}

var shaon = {
    name: 'Shaon',
    age: 30,
};

var v1 = 'Handsome';
var v2 = 'All Rounder';
var v3 = 'Best Player';

var newFunc = printName.bind(shaon, v1, v2, v3); //bind will work as like as call but it create instance.
newFunc();
*/

/*
//new binding

function Person(name, age){
    //let this = Object.create(null); // js will create it by default and return it
    this.name = name;
    this.age = age;
    console.log(`${this.name} is ${this.age} years old`)
    //return this;
}

var shaon = new Person('Shaon', 30);
*/


//window binding

var printName = function(){
    console.log(this.name); //undefined and this point the window. To solve this problem use "use strict" and get error.
}

var shaon = {
    name: 'Shaon',
};

printName();
