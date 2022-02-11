//higher order function
//in higher order function must have a function in parameter or also return a function in the function or both exist
//Array method map, filter, reduce method these are higher order functions


function hello(){
    return function(){
        console.log(`Hello World!`);
    };
};

hello()();


/*
//example1 without higher order function

var numbers = [1, 2, 3];

var result = [];

for(let i = 0; i < numbers.length; i++){
    result.push(numbers[i] * 2);
};

console.log(result);
*/

/*
//example1 with higher order function

var numbers = [1, 2, 3];
/*

// var result = numbers.map(function(item){
//     return item * 2;
// })

//arrow function
var result = numbers.map(item => item * 2);

console.log(result);
*/

/*
//Example 2 without higher order function

var players = [
    {
        name: 'Shakib',
        avg: 38.33
    },
    {
        name: 'Tamim',
        avg: 32.22,
    },
    {
        name: 'Mushfiq',
        avg: 31.33,
    },
    {
        name: 'Mahmudullah',
        avg: 37.44,
    }
];

var playerWithAvgThirtySeven = [];

for(let i = 0; i < players.length; i++){
    if(players[i].avg >= 37){
        playerWithAvgThirtySeven.push(players[i]);
    }
}

console.log(playerWithAvgThirtySeven);
*/

/*
//Example 2 with higher order function Array.filter()

var playerWithAvgThirtySeven = players.filter(item => item.avg >= 37);

console.log(playerWithAvgThirtySeven);
*/



//Example 3 array.map() built in by me

const languages = ['JavaScript', 'Python', 'PHP', 'C'];

function mapShaon(arr, fn){
    const newArray = [];

    for(i = 0; i < arr.length; i++){
        newArray.push(fn(arr[i]));
    }
    return newArray;
}

const myArray = mapShaon(languages, function(lagnuage){
    return lagnuage.length;
})

console.log(myArray);