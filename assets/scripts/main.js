let menuBtn = document.querySelector(".menu-btn"),
    menuList = document.querySelector(".navigation");


function toggleMenu() {
    if (menuBtn.innerHTML === "Menu") {
        menuBtn.innerHTML = "Close";
        menuList.style.display = "flex";
    }
    else {
        menuBtn.innerHTML = "Menu"
        menuList.style.display = "none";
    }
}

menuBtn.addEventListener("click", toggleMenu);