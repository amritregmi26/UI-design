let menuBtn = document.querySelector(".menu-btn"),
    menuList = document.querySelector(".navigation"),
    heroSection = document.querySelector(".hero");


function toggleMenu() {
    if (menuBtn.innerHTML === "Menu") {
        menuBtn.innerHTML = "Close";
        menuList.style.display = "flex";
        heroSection.style.marginBlockStart = "9rem";
    }
    else {
        menuBtn.innerHTML = "Menu"
        menuList.style.display = "none";
        heroSection.style.marginBlockStart = "0rem";
    }
}

menuBtn.addEventListener("click", toggleMenu);