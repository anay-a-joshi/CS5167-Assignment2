/*
    Name: Anay Abhijit Joshi
    Date: September 9, 2024
    Course: CS 5167 (User Interface 1)
*/

// ##################################################################################
// ##################################################################################
/*
Advanced JavaScript (Question 1A: Arrow Function)

    function addTwoNumbers(a, b){
        return a+b; 
    }
*/
let addTwoNumbers = (a, b) => (a + b);


// ##################################################################################
// ##################################################################################
/*
Advanced JavaScript (Question 1A: Arrow Function)

function stringLength( myStr ){
    if(myStr.length < 10)
        return "short";
    return "long";
}
*/
let stringLength = (myStr) => myStr.length < 10 ? "short" : "long";

// let stringLength = (myStr) => { return myStr.length < 10 ? "short" : "long"; };


// ##################################################################################
// ##################################################################################
//Advanced JavaScript (Question 2: What is this arrow functions doing?)
let fn = (a,b) => { a>b ? console.log(a) : console.log(b) }
    /*
        Name of the function is "fn";
        Parameters are "a" and "b";
            This function uses {} which means it should have an explicit return statement, but
            it doesn't have a return statement, instead it logs the message(s) to the console...
        Conditional Case: 
            If "a" is greater than "b", then output would be "a"
            Otherwise (else case), the output would be "b".
        
        Example:
            (5, 22)
                Here 5 < 22, meaning, a < b. Therefore, output is "22"
            (15, 11)
                Here 15 > 11, meaning, a > b. Therefore, output is "15"
    */


// ##################################################################################
// ##################################################################################
/*
Advanced JavaScript (Question 3)
    Write an example to demonstrate the use of the map function on an array.
*/
const numericData = [1, 2, 3, 4, 5];
const cubes = numericData.map(number => Math.pow(number, 3));
console.log(cubes);
// Returns [ 1, 8, 27, 64, 125 ]