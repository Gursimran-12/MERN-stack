// Methods in Arrays

const arr = [1,2,5,3,7,8]

// push(): Pushing an element at the starting
console.log('Pushing an element at the end');
arr.push(11);
console.log(arr);

// pop: Deleting an element from the end
console.log('Deleting an element from the end');
arr.pop();
console.log(arr);

// unshift(): Addition of element at the starting
console.log('Addition of element at the starting');
arr.unshift(10);
console.log(arr);

// shift(): Deletion of element from the beginning
console.log('Deletion of element from the beginning');
arr.shift();
console.log(arr);

// Sorting an array
console.log('Sorting the array elements');
arr.sort(); // best suited if numbers are between 0 to 9
console.log(arr);
// For numbers above 10, we have to do arr.sort((a,b) => {a-b})

// To find the reverse of an array
console.log('Reverse of the array elements');
arr.reverse();
console.log(arr);

// slice()
console.log('Slicing of array elements');
console.log(arr.slice(0,4));

// splice(), refers  to array modifications
console.log('Splicing the array');
const ary = [1,2,3,4,5,6,7,8]
ary.splice(1,0,9);
console.log(ary);
// Another Example of Splicing
ary.splice(1,2,10);
console.log(ary);

// join(): Converts the array to string 
console.log('Using the split() and join()');
const str = arr.join("-");
console.log(str);

// using split(): Converts the string to array
const arr1 = str.split("-")
console.log(arr1);


// Methods in Objects

const obj = {
    "userName" : "Gursimran", // String
    "fullName" : "Gursimran Kaur",
    "Age" : 22, // Number 
    favColor() {
        return console.log(`My Favourite colour is Black`); // Function
    },
    "isStudent" : true
}

// keys()
console.log('Displaying all the keys present in the object');
const keys = Object.keys(obj);
console.log(keys);

// values()
console.log('Displaying all the values present in the object')
const values = Object.values(obj);
console.log(values);

// enteries()
console.log('Displaying all the values present in the object');
const enteries = Object.entries(obj);
console.table(enteries);

//hasOwnProperty(), returns the answers in the from of true or false 
console.log('To check whether a key exists in the object or not')
console.log(obj.hasOwnProperty('key'));

// in- keyword
console.log('userName' in obj);