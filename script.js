const toggleButtons = document.querySelectorAll(
    "#themeToggle, #themeToggleDesktop"
);
const body = document.body;
body.classList.remove("dark-mode");
localStorage.setItem("theme", "light");

const navButtons = document.querySelectorAll("[data-target]");
const pageTitles = {
    home: "Portfolio | Home",
    about: "Portfolio | About",
    work: "Portfolio | Work",
    contact: "Portfolio | Contact"
};

document.title = pageTitles.home;

const btns = document.querySelectorAll(".nav-btn");
const btn_links = document.querySelectorAll(".btn-links");
const sections = document.querySelectorAll("section");
const navbarHeight = 80;

const form = document.querySelector("#form");
let inputs = document.querySelectorAll("input");

function changeTabonTap(e) {
    //scroll to the targeted section
    const targetID = e.currentTarget.getAttribute("data-target");
    const targetSection = document.querySelector(`#${targetID}`);
    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
    if(pageTitles[targetID]) {
        document.title = pageTitles[targetID];
    }
}

function changeBtnActive(e) {
    btns.forEach(b => b.classList.remove("active"));
    e.currentTarget.classList.add("active");
}

function changeTabonScroll() {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.id;
        }
    });

    const activeBtn = document.querySelector(`.nav-btn[data-target="${currentSection}"]`);
    if (activeBtn) {
        btns.forEach(b => b.classList.remove("active"));
        activeBtn.classList.add("active");
    }

    if(pageTitles[currentSection]) {
        document.title = pageTitles[currentSection];
    }
}

btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        changeTabonTap(e);
        changeBtnActive(e);
    });
});

window.addEventListener("scroll", changeTabonScroll);

btn_links.forEach(link => {
    link.addEventListener("click", changeTabonTap);
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const number = "917788952177"; // your WhatsApp number

    const text =
        `Name: ${name}\nEmail: ${email}\n${message}`;

    const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;

    alert("form submitted");

    window.open(url, "_blank");
    
    inputs.forEach(input => input.value = "");
});

// change theme
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    updateIcons(true);
}

toggleButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        const isDark = body.classList.contains("dark-mode");

        localStorage.setItem("theme", isDark ? "dark" : "light");
        updateIcons(isDark);
    });
});

function updateIcons(isDark) {
    toggleButtons.forEach(btn => {
        btn.innerHTML = isDark
            ? '<i class="fa-solid fa-sun"></i>'
            : '<i class="fa-solid fa-moon"></i>';
    });
}

