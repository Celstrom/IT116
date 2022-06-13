// console.log tells the console in the DOM (document object model) to display the message in the console. In this case "Hello World"
console.log("Hello World");

// let, is a declaration which allows you to give it a value and is a local variable. Math.random creates a random number 
let randomNumber = Math.random();
// This console log will output the random number in the console
console.log(randomNumber); 

// if is a conditional statement that says , if our random number is less than 0.5, the the console will output "Hello Colton" along with a random number
if (randomNumber < 0.5) {

    console.log("Hello Colton");
    console.log(randomNumber);

}

// if our random number is greater than 0.5, the console will read "random number is greater than 0.5"
if (randomNumber >= 0.5) {

    console.log('Random Number is greater than 0.5');
    console.log(randomNumber);

}


// const is a declaration that will never change, in this case the const is "Monday"
const dayOfWeek = 'Monday';
// if it is Monday, then the console will display "this is monday" (=== means if the two pieces of data are equal in data and type )
if (dayOfWeek === 'Monday') {

    console.log('This is Monday');
// if it isn't monday, then it will default to thursday with this else if statement
} else if (dayOfWeek === 'Thursday') {

    console.log("This is Thursday");
// if it isn't thursday then it will default to saturday
} else if (dayOfWeek ===  'Saturday') {

    console.log("Hooray, today is Saturday");
}

// our const will be 20, it does not change. This question will be prompted at the top of the screen for you to enter your age
const age = prompt('What is your age?');
// if our age is less than 5, the console will read you are young
if (age < 5) {
    console.log("You are young");
// if our age is less than 10, the console will read you are still young
} else if (age < 10) {
    console.log("You are still young");
// if our age is less than 35, the console will read you are old
} else if (age < 35) {
    console.log("you are old");
}
//ELSE WILL BE DISPLAYED IF ALL OTHER CONDITIONS IN THE LOGIC HAVE FAILED
else {
    console.log("You are old af");
} 


const expr = 'Papayas';
// the switch statement will match the expressions value to whatever case is associated with our const
switch (expr) {
// these are different case clauses 
    case 'Oranges':
        console.log("Oranges are $0.59 a pound");
        // when break is encountered the program breaks out of switch and executes the statement following switch
        break;    
    case 'Mangoes':
        console.log("Hello Mangos!");
        break;
    // This is the expected output because our const is 'papayas'
    case 'Papayas':
        console.log("Hello Papayas");
        break;
// default is what will be displayed when the expr cannot be matched to any of the cases
    default:
        console.log("Sorry, we are out of your asked item.");

}

// this const will bring up a prompt at the top of a webpage saying please enter a new password
const password = prompt("Please Enter A New Password");
// this conditional is saying if the password is greater than or equal to six then...
if (password.length >= 6) {

    //Nested Condition
    // if your password is equal in value or type, then the console will display Valid password
    if (password.indexOf('6') === -1) {

        console.log("Valid Password")
    // if the password fails the first statement it will be redirected to the else statements
    }else {
        console.log("Password Can't Have Spaces")
    }

    } else {

    console.log("Password is Too Short")
}

// this function will output "Do Re Mi" in vertical order in the console
function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}
// because singSong is linked to the console, it will repeat three times
singSong()
singSong()
singSong()

// this function will greet you in the console with whatever is put in parentheses below
function greet(firstName) {
// 
    console.log(`Hey There, ${firstName}`)
}
// console will read "Hey there, Colton"
greet('Colton')
// similar to above
function greet1(firstName,lastName) {
    console.log(`Hey There, ${firstName} ${lastName[0]}.`)
}
// this funtion will read, "Hey there, Elstrom, C." 
greet1('Elstrom','Colton')