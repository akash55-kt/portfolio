buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
    if(btn.innerText === 'HOME'){
        btn.addEventListener('click', ()=> {
        window.location.href = "index.html";
    });
    }
    else {
        btn.addEventListener('click', ()=> {
        window.location.href = `${btn.innerText.toLowerCase()}.html`;
        });
    }
});