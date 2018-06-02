/*=========================
    JavaScript Array Methods
=========================*/

/* Use this array for Q1 through Q3 */
var users = [
    {id:1, username: 'luke.sky', firstName: 'Luke', age: 20, race: 'human'},
    {id:2, username: 'leia.org', firstName: 'Leia', age: 20, race: 'human'},
    {id:3, username: 'han.solo', firstName: 'Han', age: 25, race: 'human'},
    {id:4, username: 'chewy', firstName: 'Chewbacca', age:200, race: 'wookie'} 
];

/*==============
    Q1 -  Use JavaScript to retrieve all the 'humans' in the array.
================*/
var humans = [users.filter(function(element, index, array){
    return element.race === 'human';
})];




test('q1', humans);



/*==============
    Q2 -  Use JavaScript to retrieve the object in the array with the 'id' equal to 2.
================*/
var leia = users.find(function(user){
       return user.id === 2; 
    });


test('q2', leia);

/*==============
    Q3 - Use JavaScript to calculate the total age of all users.    
================*/
var ages = users.map(function(element, index, array){
    return `${element.age}`;
});
 
//not sure why this isn't working :(
var totalAge = ages.reduce(add, 0);
    function add(a, b) {
        return a + b;
    }

test('q3', totalAge);
/*==============
    Q4 - Use JavaScript to create a new array that contains only the username of each user
    Expected Output: userNames = ["luke.sky", "leia.org", "han.solo", "chewy"]
================*/
var userNames = [users.map(function(element, index, array){
    return `${element.username}`;
    
})];



test('q4', userNames);

/*==============
    Q5 - Use JavaScript to sort this array of numbers ascending.
================*/
var numbers = [15,16,8,4,23,42]
numbers.sort(function(a,b){
        return a - b;
    });

test('q5', numbers);

/*==============
    Q6 - Use JavaScript to replace all instances of the word 'lorem' in this string using regular expressions
================*/
var replacement = 'Lorem ipsum dolor sit lorem consectetur adipisicing lorem. Numquam, dicta repellendus excepturi consequatur sint ipsum quibusdam delectus lorem laborum eveniet fuga officiis nesciunt nemo ab dignissimos eos doloremque consectetur quod praesentium reprehenderit. Incidunt voluptate, quo rerum mollitia adipisci nam dignissimos, ex cupiditate accusamus cumque sunt corrupti lorem vlorem nemo explicabo.';
var pattern = /lorem/ig;
var newString = replacement.replace(pattern, 'merol'); 

//not sure why this isn't working eiher, copied and pasted the code from the slide

test('q6', replacement);


/*==============
    Q7 - What is the difference between .forEach() and .map()

    A7 - forEach does not return anything, but map does return a new array

================*/

/*==============
    Q8 - What is the difference between .filter() and .find()

    A8 - filter returns all mataches to the parameter, but find only returns the first match
================*/





function test(id,result){
    document.getElementById(id).innerHTML = JSON.stringify(result);
}