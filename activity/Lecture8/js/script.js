// Get the current time and hour
// HINT: you will have to first get the full date and then get the time and hour of the day
// You may explore the use of JS built-in functions
// Create a variable to store your greeting message 
// Based on the hour you get, you need to set the conditions you want your script to check
// in order to render a specific message
// for now we want to say 'Good Morning' if it is earlier than 12PM
// otherwise we want to check if it is earlier than 3PM and let the visitor know
// 'Hey! I think we are in class!'
// For any other time (i.e., later than 3PM, we just want to say 'Welcome'
document.addEventListener('DOMContentLoaded', () =>{
const now = new Date();
const hour = now.getHours();
let message;
  if (hour < 12) {
    message = 'Good Morning';
  } else if (hour < 15) {
    message = 'Good Afternoon';
  } else {
    message = 'Welcone';
  }
  const greeting = document.getElementById('greeting');
  greeting.textContent = message;
}
);
 










// This is an example of an if statement, or a conditional statement
// the JS interpreter checks if a conditions is true, if it is then it executes the code
// If the condition is FALSE, then it skips the code and moves onto the next one (i.e., our else if conditional)
// If that second condition is also FALSE then it moves to our last conditional, our else statement
// IF statements always end in an ELSE statement, if you want to give options in-between we always use ELSE IF
// Then, we use the DOM, and calling the 'getElementById( )' method and its innerHTML property to add some HTML for us onto our webpage
// we basically want to show the return result in <h2 id="greeting"></h2>



// In this section of our script, we want to access the values the user entered into our form
// and add them together
// First we declare our variables for the two values


// Now, let's use the DOM now to access a value in our form and show it back to us in an alert( ) box
// First, we'll creatr a function to store the input values into the variables we declared
// We'll enclose that code block in a function, getNumbers( )

// Store the values from the form into the variables we declared above
function getNumbers(){
	const n1 = Number(document.getElementById('number1').value);
	const n2 = Number(document.getElementById('number2').value);
	//alert("The numbers you have entered are: " + n1 + " And " + n2);
	return [n1, n2];
}

 
function addition(input){
	let [a, b] = input;
	let result =  a + b;
	document.getElementById("result").textContent = result;
	return result;
}

function substract(input){
	let [a, b] = input;
	let result = a - b;
	document.getElementById("result").textContent = result;
	return result;
}

function multiply(input){
	let [a, b] = input;
	let result = a * b;
	document.getElementById("result").textContent = result;
	return result;
}

function divide(input){
	let [a, b] = input;
	let result = a / b;
	document.getElementById("result").textContent = result;
	return result;
}


  const forms = document.querySelector("form");
  forms.addEventListener("submit", (event) => {
    event.preventDefault();
  });

	// Call the getNumbers() function to import the values the user enteres into the form into 
	// this function
	
	// We perform our addition on the two values
	

	// Display the result of the calculation
	





