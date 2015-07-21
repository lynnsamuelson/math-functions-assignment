/*
  Create a function that multiplies two numbers
  passed in as argument. Return the product.
 */


/*
  Create a function that divides two numbers
  passed in as argument. Return the quotient.
 */


/*
  Create a variable to hold the return value of the
  3-argument function. 

  e.g. var result = myFunction(0, 0, func)
 */


/*
  Log the result
 */

 function multiply (num1, num2) {
 	return num1 * num2;
 }

 function divide (num1, num2) {
 	return num1 / num2;
 }

function myFunction(num1, num2, func) {
	return func(num1, num2);
}

var a = myFunction(3, 2, multiply);

console.log(myFunction(4,4, divide));
console.log(a);


