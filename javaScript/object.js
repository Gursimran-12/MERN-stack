// Creating an object in JavaScript
const obj = {
    "userName" : "Gursimran", // String
    "fullName" : "Gursimran Kaur",
    "Age" : 22, // Number 
    favColor() {
        return console.log(`My Favourite colour is Black`); // Function
    },
    "isStudent" : true, // Boolean
    "111": 11111
}

// Accessing the object elements using square brackets
console.log('Accessing the object elements using square brackets');
console.log(obj['fullName']); // we can access it only by using inverted quotes because the keys in the objects are strings always.
console.log(obj['userName']);
console.log(obj['Age']);
console.log(obj['favColor']);
console.log(obj['isStudent']);
console.log(obj['111']);

// Accessing the object elements using dot (.) operator
console.log('Accessing the object elements using dot (.) operator')
console.log(obj.fullName);
console.log(obj.userName);
console.log(obj.Age)
console.log(obj.favColor());
console.log(obj.isStudent);

// console.log(obj.111); this will show an error

// Updations in Objects
obj.fullName = "Simran Kaur";
console.log(obj);
obj['Age'] = 20;
console.log(obj);

// Deletion in Objects (Keys)
delete obj.Age;
obj.fullName = null;
console.log(obj);

// Using for....in loop
for(const key in obj)
{
    // With obj.key, we get Undefined Enteries
    console.log(obj[key]);
}

