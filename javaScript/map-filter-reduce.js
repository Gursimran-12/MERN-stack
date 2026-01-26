/*
// Using forEach() function

const arr = [1,2,8,5,4,3];
arr.forEach((value) => {
    const sum = value+1
    console.log(sum);
})

// It will return nothing
const result = arr.forEach((value) => value + 1);
console.log(result);

// Using map() function in JavaScript
const arr = [1,3,5,2,7,4];
const result = arr.map((value) => {return value+1;})
console.log(result);

// Using filter() Function in JavaScript
const results = arr.filter((n) => {return n%2 === 0})
console.log(results);

// Using reduce() Function in JavaScript
const nums = arr.reduce((acc,n) => {return acc+n},0)
console.log(nums);


// Program to practice

// You have a list of prices in rupees. Create a new list where each price is increased by 10%.
const prices = [100,200,300]
const updatedPrices = prices.map((value) => {return value = value+ value * 0.10 })
console.log(`The prices of the items after applying the GST is: `)
console.log(updatedPrices);

// You have a list of students’ names. Convert all names to uppercase.
const students = ['Ram', 'Sham', 'Geeta', 'Babita'];
const updatedNames = students.map((value) => {return value.toUpperCase()});
console.log(updatedNames);

// You have a list of temperatures in Celsius. Convert each temperature to Fahrenheit.
const temperature = [0,10,25,32];
const Fahrenheit = temperature.map((value) => {return (value*9/5)+32});
console.log(Fahrenheit);

// You have a list of numbers. Create a new list containing the square of each number.
const numbers = [1,2,3,4,5,6,7];
const square = numbers.map((value) => {return value**2});
console.log(square);

// Examples related to filters

// You have a list of ages. Keep only the people who are 18 or older.
const age = [12,14,18,17,19,20,23,45,35];
const newAge = age.filter(value => value >= 18);
console.log(newAge);

// You have a list of products with inStock property. Keep only the products that are available.
const products = [
  { name: 'Apple', instock: true },
  { name: 'Mango', instock: false },
  { name: 'Banana', instock: true }
];

const available = products.filter(value => value.instock);

console.log(available);

// You have a list of students with marks. Keep only students who passed (marks ≥ 50).

const marks = [45,23,67,89,50,78,67]
const result = marks.filter(value => value>=50)
console.log(result);

// Examples related to reduce
// You have a list of item prices. Calculate the total bill amount.
const items = [
    {item1: "Jacket", price: 2000},
    {item2: "Jeans", price: 5000},
    {item3: "Shoes", price: 3000}
]
const total = items.reduce((acc,value) =>{ return acc+value.price},0)
console.log(`The total amount is Rs.${total}`);

// You have a list of marks. Find the highest mark.
const marks = [20, 67, 34, 89, 30, 69];

const highest = marks.reduce((acc, n) => {
  if (n > acc) {
    return n;
  }
  return acc;   // ← this was missing
}, 0);

console.log(highest);

// You have a list of numbers. Count how many numbers are greater than 50.
const nums = [10,30,50,70,80,60,30,20];
let count = 0;
const greater = nums.reduce((acc,n) => {
    if(n > 50)
    {
        count++;
    }
    return count;
},0);
console.log(`The number of values greater than 50 are ${greater}`);
*/

// Examples related to all map(), filter() and reduce()
// You have a list of ages. Keep adults (18+), Increase each age by 1 year and count how many adults are there.
const ages = [20, 18, 19, 15, 17, 22, 23];
let count = 0;
const adults = ages.filter(n => n>=18)
console.log('The adults are');
console.log(adults);

const newAge = adults.map((n) => {return n+1})
console.log('Age after 1 year');
console.log(newAge);

const total = newAge.reduce((acc,n) => {  if(n>=18)
    count++;
    return count
} , 0);
console.log(`Total adults are ${count}`);

