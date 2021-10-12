const hamburgerMenu = document.querySelector("i.fas.fa-bars");
const ciao = document.querySelector(".hamburger-menu");


hamburgerMenu.addEventListener('click',
    function () {
        ciao.classList.add("active");
    }
);

const closeBtn = document.querySelector(".close");

closeBtn.addEventListener("click",
    function () {
        ciao.classList.remove("active");
    }
);