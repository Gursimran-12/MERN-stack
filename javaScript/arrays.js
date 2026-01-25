/*
// Arrays in javaScript
const arr = [10, 12, "Ram", 40];

// Fetching an element from array 
let value = arr[2];
console.log(value);

// Displaying the entire array
console.log(arr);

// Deleting a value from array
let a = delete arr[3];
console.log(`The value deleted is ${a} and the array after deletion is shown below`);
console.log(arr);

// Changing the values in an array at any index (Array value Manipulation)
let input = parseInt(prompt(`Enter the index of value you want to delete`));
let num = parseInt(prompt(`Enter the value you want to insert here`));
arr[input] = num;
console.log(`Array after manipulation is shown below`);
console.log(arr);

// Here we can store hetrogenous type of data in an array (it can be number, string, function, 
// object, boolean, undefined and it can be even null)
const mix = [12, "Rani", () => {return hello}, {name: "Gursimran"}, true, undefined, null];

// Array Declaration using constructor method
const fruits = new Array(2);
console.log(fruits);
fruits[0] = "Strawberry";
fruits[1] = "Apple";
fruits[2] = "Mango";
console.log(fruits);

// Array and loop
for(let i=0; i<fruits.length; i++)
{
    console.log(fruits[i]);
}

// Easiest way to do this using for...of loop
console.log(`Displaying the fruits using for...of loop`)
for(const value of fruits)
{
    console.log(value);
}
*/

/*
// Seaching in the array
const fruits = ["Apple", "Mango", "Orange", "Strawberry", "Pineapple", "Papaya"]
let fruit = prompt(`Enter the fruit here`);
let count;
// Searching in array: To check whether the fruit exists in the array or not 
for(const value of fruits)
{
    if(value === fruit)
    {
        console.log(`Congratulations! The fruit is present in the basket`);
        count++;
    }
    
}

if(count === 0)
{
    console.log(`Sorry! you won't be able to get this fruit`);
}
*/

/*
// Sorting in the array
let temp;
const arr = [1,5,2,3,7]
for(let i=0; i<arr.length; i++)
{
    if(arr[i] > arr[i+1])
    {
        // Do Swapping
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
}
console.log(arr);
*/

/*
// To Check whether the array is palindrome or not
const arr = [1,2,3,1];
let count = 0;
for(let i=0; i<arr.length; i++)
{
    if(arr[i] === arr[arr.length-1-i])
    {
        count++;
    }
}
console.log(count);
if(count === arr.length)
{
    console.log(`Yes! The array is palimdrome`)
}
else
{
    console.log(`No! The array is not palindrome`);
}
*/

// To find the Reverse of an array
const arr = [1,2,3,4,5];
let temp;

for(let i=0; i<arr.length/2; i++)
{
    temp = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = temp;
}
console.log(arr);