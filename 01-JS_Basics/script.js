/* Variables & Datatypes */

/*
var firstName = 'Irfan';
console.log(firstName);

var lastName = 'Danish';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher'
console.log(job)
*/

/* Variables Mutation & Type Coercion
    Type coercion is the process of converting value from one type to another (such as string to number, object to boolean, and so on)
    */
//Type Coercion
var firstName = 'Irfan';
var age = 23;
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'ML Engineer';
isMarried = false;
console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is Married? ' + isMarried);

//Variable Mutation
age = 'twenty three';
job = 'Electronics Engineer';
alert(firstName + ' is a ' + age + ' year old ' + job + '. Is Married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);