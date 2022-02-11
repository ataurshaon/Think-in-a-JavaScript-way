//Var, let & const

//var is function scope it can be access from anywhere and it can be redefined and reassigned
if(true){
    var varVariable = 'This is var';
    var varVariable = 'This is var again'; //var can be defined again and again 
}
console.log(varVariable);

//let is block scope so it can not be accessed from outside of the if or others scope. It should access from it's own scope.
if(true){
    let letVariable = 'This is let';
    //let letVariable = 'This is let again defined';//it will cause error because let can not be defined again.
    letVariable = 'This is let assigned again';
    console.log(letVariable);
}


if(true){
    const constVariable = 'This is const';
    //constVariable = 'This const redefined and reassigned'; //const can not be redefined and reassigned. but for object it can be updated the value. Example as below:

    const constObj = {
        name : 'shaon',
        age : '29 years old'

    }
    constObj.name = 'rahi';

    console.log(constVariable);
    console.log(constObj);
}

