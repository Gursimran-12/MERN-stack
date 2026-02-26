// 11. The Quiz App 
// • Data: Create an array of questions:
// JavaScript
// const questions = [
//     { text: "What is 2+2?", answer: "4", options: ["2", "4", "5", "6"] },
//     { text: "Capital of India?", answer: "Delhi", options: ["Mumbai", "Delhi", "Goa", "Pune"] }
// ];• Logic:

// Create a variable currentQuestionIndex = 0.
// Create a function loadQuestion() that updates the h3 text and the 4 buttons.
// When a button is clicked, check if the text matches the answer.
// If Correct: Increase Score, Alert "Correct!", and move to the next index.
// If Wrong: Alert "Wrong!".

const questions = [
    { text: "What is 2+2?", answer: "4", options: ["2", "4", "5", "6"] },
    { text: "Capital of India?", answer: "Delhi", options: ["Mumbai", "Delhi", "Goa", "Pune"] }
];

const questionText = document.getElementById("question-text");
const startQuiz = document.getElementById("start-quiz");
const optionBtn = document.querySelectorAll(".option-btn");
const quizScore = document.getElementById("quiz-score");
let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    questionText.innerText = questions[currentQuestionIndex].text;
    optionBtn.forEach((btn, index) => {
        btn.innerText = questions[currentQuestionIndex].options[index];
        btn.onclick = () => checkAnswer(btn.innerText);
    })
}

function checkAnswer(selected) {
    if (selected === questions[currentQuestionIndex].answer) {
        alert("The solution is correct");
        score++;
        quizScore.innerText = score;
    }
    else {
        alert("The answer is wrong");
    }
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    }
    else {
        questionText.innerText = "Quiz Completed";
    }

}

startQuiz.addEventListener("click", () => {
    loadQuestion();
})

// 12. The Shopping Cart (Objects + Math)
// • Data: Create an empty array cart = [].
// • Logic:

// Create a function addToCart(name, price).
// Push an object { name: name, price: price } into the cart array.
// Render: Loop through the cart array, create <li> tags for each item, and append them to cart-list.
// Calculate: Use a loop to calculate the total price and update the #total-price span.

const cart = [];
const cartList = document.getElementById("cart-list");
const totalPrice = document.getElementById("total-price");

function addToCart(name, price) {
    cart.push({ name, price });
    const li = document.createElement("li");
    li.textContent = `${name} - ${price}`;
    cartList.appendChild(li);
    totalMoney();
}

function totalMoney() {
    const Total = cart.reduce((acc, n) => acc + n.price, 0);
    totalPrice.innerText = Total;
}


// 13. The Tabbed Interface (Class Manipulation)
// • Goal: Switch between 3 views without reloading the page.
// • Logic:
// 1. Select all tab-btn buttons and all content-box divs.
// 2. Add a click listener to the buttons.
// 3. When clicked:
// Step 1: Hide ALL content boxes (add .hidden class).
// Step 2: Remove "active" class from ALL buttons.
// Step 3: Show ONLY the box that matches the button's data-target (remove .hidden).
// Step 4: Add "active" class to the clicked button.

const tabBtns = document.querySelectorAll(".tab-btn");
const boxes = document.querySelectorAll(".content-box");

tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {

        boxes.forEach(box => box.classList.add("hidden"));
        tabBtns.forEach(b => b.classList.remove("active"));

        const target = btn.getAttribute("data-target");
        document.getElementById(target).classList.remove("hidden");

        btn.classList.add("active");
    });
});


// 14. The Task Filter (Array Filtering)
// • Data: let tasks = [{ text: "Learn JS", completed: false }];
// • Logic:
// 1. Add: New tasks are pushed to the array with completed: false.
// 2. Toggle: Clicking a task toggles its completed status (true/false) and adds a CSS line-through style.

// Filter:
// "Show Active" button: Uses tasks.filter(t => !t.completed) and re-renders the list.
// "Show Completed" button: Uses tasks.filter(t => t.completed).
// "Show All": Renders the whole array.

let tasks = [{ text: "Learn JS", completed: false }];

function render(list) {
    const ul = document.getElementById("taskList");
    ul.innerHTML = "";

    list.forEach((task, index) => {
        const li = document.createElement("li");

        li.textContent = task.text + (task.completed ? " (done)" : "");
        li.style.textDecoration = task.completed ? "line-through" : "none";


        li.onclick = () => {
            tasks[index].completed = !tasks[index].completed;
            render(tasks);
        };

        ul.appendChild(li);
    });
}


function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value;
    if (text === "") return;

    tasks.push({ text: text, completed: false });
    input.value = "";
    render(tasks);
}

function showAll() {
    render(tasks);
}

function showActive() {
    const active = tasks.filter(t => !t.completed);
    render(active);
}

function showCompleted() {
    const completed = tasks.filter(t => t.completed);
    render(completed);
}

render(tasks);

// 15. The Live Form Validator (Events & Disabled Button)
// • Goal: The "Sign Up" button should stay Disabled (greyed out) until the form is valid.
// • Logic:

// Add input event listeners to all 3 boxes.
// Username Check: If length < 5, show #user-error.
// Password Check: If length < 8, show #pass-error.
// Match Check: If pass value !== confirm-pass value, show #match-error.
// Master Check: If ALL 3 are valid, set submitBtn.disabled = false. Otherwise, keep it true.

const userError = document.getElementById("user-error");
const passError = document.getElementById("pass-error");
const matchError = document.getElementById("match-error");

const userName = document.getElementById("username");
const password = document.getElementById("pass");
const confirmPass = document.getElementById("confirm-pass");
const submitBtn = document.getElementById("submit-btn");

userName.addEventListener("input", validateForm);
password.addEventListener("input", validateForm);
confirmPass.addEventListener("input", validateForm);

function validateForm() {
    let user = userName.value;
    let pass = password.value;
    let confirm = confirmPass.value;

    userError.style.display = (user.length < 5) ? "block" : "none";

    passError.style.display = (pass.length < 8) ? "block" : "none";

    matchError.style.display = (pass !== confirm) ? "block" : "none";

    submitBtn.disabled = !(u.length >= 5 && p.length >= 8 && p === c);
}