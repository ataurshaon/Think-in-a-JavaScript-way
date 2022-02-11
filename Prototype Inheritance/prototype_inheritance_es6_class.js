//Prototype, Inheritance & ES6 Class


/*
function Person(name, age){
    this.name = name;
    this.age = age;

    //below function can not be used because it take space in the object for every method created but if we use these common methods in the prototype property
    // this.eat = function(){
    //     console.log(`${this.name} is eating`)
    // }
}

Person.prototype = {
    eat : function(){
        console.log(`${this.name} is eating`);
    }
}

const shaon = new Person('Shaon', 30);
console.log(shaon);
const rahi = new Person('Rahi', 31);
console.log(rahi);
*/


/*
//prototype chain
//Here, we can access shaon function from the p object because of prototype chain. Every function and object has prototype and there also have master object prototype. Here, Object.prototype it is master object.  

var f = function(){};

Object.prototype.shaon = function(){
    console.log("I am Shaon");
}

var p = {};

p.shaon();
*/


/*
//Inheritance

function Person(name, age){ //parent class
    this.name = name;
    this.age = age;
}

function Cricketer(name, age, type, country){ //sub class
    Person.call(this); //here call the Person function and send this property to it.
    this.name = name;
    this.age = age;
    this.type = type;
    this.country = country;
}

Person.prototype = {
    eat : function(){
        console.log(`${this.name} is eating`);
    }
}

Cricketer.prototype = Object.create(Person.prototype); //access Person.prototype or inherit.
Cricketer.prototype.constructor = Cricketer; //overwrite the Cricketer constructor to get Person.call(this).
Cricketer.prototype.Play = function(){
    console.log(`${this.name} is playing`);
}




const shaon = new Cricketer('Shaon', 30, 'All Rounder', 'Bangladesh');

console.log(shaon);
shaon.Play(); //Now, we can access the Person function's property easily in Cricketer function
*/


/*

//Convert to Class
//Inheritance


class Person{ //Parent class
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log(`${this.name} is eating`);
    }
}

class Cricketer extends Person{ //child class
    constructor(name, age, type, country){
        super(name, age);
        this.name = name;
        this.age = age;
        this.type = type;
        this.country = country;
    }

    Play(){
        console.log(`${this.name} is playing`);
    }
}

const shaon = new Cricketer('Shaon', 30, 'All Rounder', 'Bangladesh');
console.log(shaon);

shaon.Play();


const rahi = new Person('Rahi', 31);
rahi.Play(); //Parent class can't access the child class function 
*/


/*

//getter & setter

class Person{ 
    constructor(name, age){
        this.name = name; //property
        this.age = age;
    }

    eat(){ //method
        console.log(`${this.name} is eating`);
    }

    //getter and setter behave like methods but working as property

    get setName(){ //getter
        return this.name;
    }

    set setName(name){ //setter which can change the value of the property
        this.name = name;
    }
}

const shaon = new Person('Shaon');

//console.log(shaon.setName);

shaon.setName = 'Rahi'; //set setter
console.log(shaon.name);
*/



/*
//Static Method

class Person{ 
    constructor(name, age){
        this.name = name; //property
        this.age = age;
    }

    eat(){ //method
        console.log(`${this.name} is eating`);
    }

    //No need to create instance or object for static method. It can be use by direct class name 
    static isEqualAge(cricketer1, cricketer2){
        //console.log("I am Static method");
        return cricketer1.age === cricketer2.age;
        //return this.name; //this can not be accessed from it. Here, this means Person class
    }
}

const shaon = new Person('Shaon', 30);

const rahi = new Person('Rahi', 31);

//Person.isEqualAge(); //static method access without object creation
console.log(Person.isEqualAge(shaon, rahi)); 
*/


//Polymorphism

class Person{ //Parent class
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    play(){
        console.log(`${this.name} is playing`);
    }
}

class Cricketer extends Person{ //child class
    constructor(name, age, type, country){
        super(name, age);
        this.name = name;
        this.age = age;
        this.type = type;
        this.country = country;
    }

    play(){ //Polymorphism changing the parent class method
        super.play(); //access parent method
        console.log(`${this.name} is playing cricket`);
    }
  
}

const shaon = new Cricketer('Shaon', 30, 'All Rounder', 'Bangladesh');

shaon.play();



