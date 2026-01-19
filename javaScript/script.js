// Task 1 (Look at the code below. Write down what you think the output will be for A, B, and C).
console.log(10 + 20 + "Cars");
/* Output: 30Cars, As Js parse from left to right, firstly it will reach to 10 which is a 
number then 20 which is also a number it will add both of them and we with get 30 as a result
and then at the rightmost position, I got string then string cancatenation will be performed. */

console.log("Cars" + 10 + 20);
// Output: Cars1020

console.log(5 + 5 + "Dollars" + 5 + 5);
// Output: 10Dollars55



// Task 2 (The "Weird Math" (Coercion). Predict the result of these mathematical operations).
let a = "100";
let b = 10;

console.log(a + b);  
/* Output: 10010, in the starting, we have string here, so it will consider the variables
 coming after - as string itself and that is why it is doing string cancatenation here */

console.log(a - b);  
/* Output: 90, here if a number is inside the double quotes (string) then, 
it will consider that string as a number and perform mathematical subtraction */

console.log(a * b);  
/* Output: 1000, it is same as that of subtraction */

console.log(a / "Banana"); 
/* Output: NaN, when we try to divide a numerical string with the alphabetical string then
this will not produce anything, that is why we get NaN */



// Task 3 (Find Average)
let eng = 80;
let math = 90;
let sci = 85;

// ERROR CODE (Do not run this, fix it):
// let average = eng + math + sci / 3;
// Your Task: Fix the code above so it calculates the correct average (which should be 85).
let average = (eng + math + sci)/3;
console.log(`The average is ${average}`);

/* Inorder to fix this, I have just add parenthesis that will give the indication 
that firstly, I have to add all the three numbers then we have to perform division. 
In the above case that is provided in the question will add two numbers first then 
the marks of sci will be divided by 3 and then it will be added to the earlier sum */