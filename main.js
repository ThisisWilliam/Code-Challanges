// write a function named stringy that takes a size and returns a string of alternating '1s' and '0s' refer to canvas for further instructions
function stringy( size ) {
	number = "";
	for(var i = 1; i <= size; i++) {		 
    number += i%2;
	}
	return number;
}

// Given a non-negative integer, return an array containing a list of independent digits in reverse order.
function reverseNumbers(arr) {
 var main = (""+arr).split('');
 var reverse = [];
 for (var i = main.length - 1; i >= 0; i--) {		
   reverse[i] = parseInt(main.shift(),10);
 }
 return reverse;
}

console.log(reverseNumbers(348597));


// Build a function to illustrate how to get this sequence to output. If you don’t know where to begin start with pseudo code to work through the steps
function fibonacci( x ) {
	var current = 0;
	var last = 1;
	for(var i=0;i<x;i++){
		var temp = last;
		last = current;
		current = last + temp;
	}
	return current;
}
	
// Write a function called checkCoupon to verify that a coupon is valid and not expired. If the coupon is good, return true. Otherwise, return false. Refer to Canvas for further instruction.
var today = "November 22, 2016";		//set the expire date to help us run the coupon/check code
function checkCoupon( coupon ) {			//verity the date- use return coupon code
	return coupon instanceof coupon && verifyDate( coupon.expiration, today ) && coupon.code.length >= 4 && coupon.code.length <= 8;
}
function verifyDate( expiration, comparison ) {				//once the code above goes through compare date of expire/comparison
	return new Date(expiration) >= new Date(comparison);
}
// Coupon Object
//after all steps are done above, use this. to call in the function "code,expiration"
function Coupon( code, expiration ) {
	this.code = code;			
	this.expiration = expiration;
}

// Email Validation 
//Bonus question
function validEmail( email ) {			//code below to check characters such as uppercase/lowercase and numbers and lenght
	var validate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validate.test(email);		//to test email if it is valid
}