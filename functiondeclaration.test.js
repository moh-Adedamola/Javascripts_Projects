const {add, multiply, divide} =  require("./functiondeclaration.js");

test("add two numbers",() => {

	let numone = 2;
	let numtwo = 5
	let ans = add(2,5)
		
	expect (ans). toBe(7);
	});
test("multiply two numbers",() => {

	let numone = 2;
	let numtwo = 5
	let ans = multiply(2,5)
		
	expect (ans). toBe(10); 
	});

test("divide two numbers",() => {

	let numone = 10;
	let numtwo = 2
	let ans = divide(10,2)
		
	expect (ans). toBe(5);
	});