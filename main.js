const hamburgerMenu = document.querySelector("i.fas.fa-bars");
console.log(hamburgerMenu);

hamburgerMenu.addEventListener('click',
    function () {
        const ciao = document.querySelector(".hamburger-menu");
        ciao.classList.add("active");
    }
);

const closeBtn = document.querySelector(".close");

closeBtn.addEventListener("click",
    function () {
        const ciao = document.querySelector(".hamburger-menu");
        ciao.classList.remove("active");
    }
);