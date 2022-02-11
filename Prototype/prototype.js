//Prototype


/*
//We can create object and function in the object by below

let person = {};

person.name = "shaon";
person.age = 30;


person.eat = function(){
    console.log(`Person is eating`);
};


person.sleep = function(){
    console.log(`Person is sleeping`);
};

console.log(person);
*/

/*
//We can define the whole object with a function and parameter as below

let p = function Person(name, age){
    let person = {};

person.name = "name";
person.age = age;


person.eat = function(){
    console.log(`Person is eating`);
};


person.sleep = function(){
    console.log(`Person is sleeping`);
};

return person;

};

console.dir(p);
*/


/*
//By below we create two object shaon and rahi with value

function Person(name, age){
    let person = {};

person.name = "name";
person.age = age;


person.eat = function(){
    console.log(`Person is eating`);
};


person.sleep = function(){
    console.log(`Person is sleeping`);
};

return person;

};

const sakib = Person("Shaon", 30);
const rahi = Person("Rahi", 31);
*/



/*

//Now, create another object methods for below function eat and sleep

//If we want to add another methods in personMethods then it also need to refer in the function Person

//So, this is not a good way to create new methods and also refer it in the person object for solving this we need to use object.create method


const personMethods = {

    eat(){
        console.log(`Person is eating`);
    },
    
    
    sleep(){
        console.log(`Person is sleeping`);
    },

    play(){
        console.log(`Person is playing`);
    }

}


function Person(name, age){
    let person = {};

person.name = "name";
person.age = age;

person.eat = personMethods.eat;
person.sleep = personMethods.sleep;
person.play = personMethods.play;


return person;

};

const sakib = Person("Shaon", 30);
const rahi = Person("Rahi", 31);
*/


/*
//object.create - it access the parent object
//if we console.log the player then output should be empty but if we do console.log with the property name then output should be shown for below method.

const captain = {
    Fname : "Shaon",
    age : 31,
    country : "Bangladesh",
}

const player = Object.create(captain);

console.log(player.Fname);
*/


/*
//Here, for using Object.create method if we add extra method in personMethods then no need to define again in person object.

const personMethods = {

    eat(){
        console.log(`Person is eating`);
    },
    
    
    sleep(){
        console.log(`Person is sleeping`);
    },

    play(){
        console.log(`Person is playing`);
    }

}


function Person(name, age){

let person = Object.create(personMethods);

person.name = "name";
person.age = age;

// person.eat = personMethods.eat;
// person.sleep = personMethods.sleep; //theese are not needed if we use Object.create method
// person.play = personMethods.play;


return person;

};

const shaon = Person("Shaon", 30);
shaon.play();
const rahi = Person("Rahi", 31);
rahi.play();
*/



/*
//prototype is a property of a function which points the object

//As we used personMethods differentyly for share common methods with the person objects and for access easily for changing or adding anything in the methods.

//Now, we can do it by using prototype.


function Person(name, age){

let person = Object.create(Person.prototype);

person.name = "name";
person.age = age;

return person;
};

Person.prototype = {
    eat(){
        console.log(`Person is eating`);
    },
    
    sleep(){
        console.log(`Person is sleeping`);
    },

    play(){
        console.log(`Person is playing`);
    }
}

const shaon = Person("Shaon", 30);
shaon.play();
const rahi = Person("Rahi", 31);
rahi.play();
*/


/*

//no need to use let person = Object.create(PersonWithNew.prototype); and return person if we use new keyword for creating object for function. JS works by default for these two lines.

// function Person(name, age){

//     let person = Object.create(Person.prototype);
    
//     person.name = "name";
//     person.age = age;
    
//     return person;
//     };


    function PersonWithNew(name, age){

        //let person = Object.create(PersonWithNew.prototype); //no need to use this line if we use new keyword for creating object for function
        
        this.name = "name";
        this.age = age;
        
        //return person; ////no need to use this line if we use new keyword for creating object for function
        };

    
    PersonWithNew.prototype = {
        eat(){
            console.log(`Person is eating`);
        },
        
        sleep(){
            console.log(`Person is sleeping`);
        },
    
        play(){
            console.log(`Person is playing`);
        },
    }
    
    // const shaon = Person("Shaon", 30);
    // shaon.play();
    // const rahi = Person("Rahi", 31);
    // rahi.play();


    const shaon = new PersonWithNew("Shaon", 30);
    shaon.play();
    const rahi = new PersonWithNew("Rahi", 31);
    rahi.play();
*/



/*

//Convert into class


class Person{
    constructor(name, age){
        this.name = name;
        this.age = age
    }
    eat(){
        console.log(`Person is eating`);
    }
    
    sleep(){
        console.log(`Person is sleeping`);
    }

    play(){
        console.log(`Person is playing`);
    }

}

const shaon = new Person("Shaon", 30);
shaon.play();
const rahi = new Person("Rahi", 31);
rahi.play();
*/


//To find out the prototype of the Array

//let persons = [];

let persons = new Array();

console.log(Array.prototype);