buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
    if (btn.innerText === 'HOME') {
        btn.addEventListener('click', () => {
            window.location.href = "index.html";
        });
    }
    else {
        btn.addEventListener('click', () => {
            window.location.href = `${btn.innerText.toLowerCase()}.html`;
        });
    }
});

//contact submit

// let submit = document.querySelector(".submit");
let form = document.querySelector("form");
let userName = document.querySelector(".name");
let email = document.querySelector(".email");
let msg = document.querySelector(".msg");

let number = 7788952177;

form.addEventListener('submit', () => {
    let url = `https://wa.me/${number}?text=
    Name: ${encodeURIComponent((userName).value)}%0A
    Email: ${encodeURIComponent((email).value)}%0A
    ${encodeURIComponent((msg).value)}`;

    window.open(url, "_main");
});