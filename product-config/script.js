const options = document.getElementById("options")
const div1 = document.createElement("div");
const cart = [];
const price = document.getElementById("price");

function addtoCart(name, price) {
    cart.push({ name, price });
    totalMoney();
}

function totalMoney() {
    const money = cart.reduce((acc, n) => acc + n.price, 0);
    price.innerText = money;

}

options.appendChild(div1)
div1.classList.add("optionStyle")
addRam();

const div2 = document.createElement("div");
options.appendChild(div2)
div2.classList.add("optionStyle")
addStorage();

const div3 = document.createElement("div");
options.appendChild(div3)
div3.classList.add("optionStyle")
addColor();

const summary = document.getElementById("Summary");

function addRam() {

    const h2 = document.createElement("h2")
    h2.textContent = "RAM"
    const btn1 = document.createElement("button")
    btn1.textContent = "8GB (+Rs 0)"
    btn1.classList.add("optionBtn");
    btn1.addEventListener("click", () => {
        const li = document.createElement("li");
        li.textContent = btn1.textContent;
        console.log(li);
        summary.appendChild(li);
        addtoCart("8GB", 0);
    })
    const btn2 = document.createElement("button")
    btn2.textContent = "16GB (+Rs 8000)"
    btn2.classList.add("optionBtn");
    btn2.addEventListener("click", () => {
        const li = document.createElement("li");
        li.textContent = btn2.textContent;
        console.log(li);
        summary.appendChild(li);
        addtoCart("16GB", 8000);
    })

    const btn3 = document.createElement("button")
    btn3.textContent = "32GB (+Rs 16000)"
    btn3.classList.add("optionBtn");
    btn3.addEventListener("click", () => {
        const li = document.createElement("li");
        li.textContent = btn3.textContent;
        console.log(li);
        summary.appendChild(li);
        addtoCart("32GB", 16000);
    })


    div1.appendChild(h2);
    div1.appendChild(btn1);
    div1.appendChild(btn2);
    div1.appendChild(btn3);
    const ramBtns = [btn1, btn2, btn3]

    ramBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            ramBtns.forEach(b => b.classList.remove("selected"));

            btn.classList.add("selected");

        });
    });


}

function addStorage() {

    const h2 = document.createElement("h2")
    h2.textContent = "STORAGE"
    const btn4 = document.createElement("button")
    btn4.textContent = "256GB (+Rs 0)"
    btn4.classList.add("optionBtn");
    btn4.addEventListener("click", () => {
        const li = document.createElement("li");
        li.textContent = btn4.textContent;
        console.log(li);
        summary.appendChild(li);
        addtoCart("256GB", 0);
    })


    const btn5 = document.createElement("button")
    btn5.textContent = "512GB (+Rs 5000)"
    btn5.classList.add("optionBtn");
    btn5.addEventListener("click", () => {
        const li = document.createElement("li");
        li.textContent = btn5.textContent;
        console.log(li);
        summary.appendChild(li);
        addtoCart("512GB", 5000);
    })

    const storageBtn = [btn4, btn5]
    storageBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            storageBtn.forEach(b => b.classList.remove("selected"));

            btn.classList.add("selected");

        });
    });



    div2.appendChild(h2);
    div2.appendChild(btn4);
    div2.appendChild(btn5);
}

function addColor() {

    const h2 = document.createElement("h2")
    h2.textContent = "COLOR"
    const btn6 = document.createElement("button")
    btn6.textContent = "Silver (+Rs 0)"
    btn6.classList.add("optionBtn");
    btn6.addEventListener("click", () => {
        const li = document.createElement("li");
        li.textContent = btn6.textContent;
        console.log(li);
        summary.appendChild(li);
        addtoCart("Silver", 0);

    })

    const btn7 = document.createElement("button")
    btn7.textContent = "Black (+Rs 2000)"
    btn7.classList.add("optionBtn");
    btn7.addEventListener("click", () => {
        const li = document.createElement("li");
        li.textContent = btn7.textContent;
        console.log(li);
        summary.appendChild(li);
        addtoCart("Black", 2000);
    })
    const colorBtn = [btn6, btn7]
    colorBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            colorBtn.forEach(b => b.classList.remove("selected"));

            btn.classList.add("selected");

        });
    });

    div3.appendChild(h2);
    div3.appendChild(btn6);
    div3.appendChild(btn7);
}