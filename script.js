const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const header = document.querySelector(".header");

menuBtn.onclick = () => {
    menu.classList.add("active");
    menuBtn.classList.add("hide");
    closeBtn.classList.remove("hide");
}

closeBtn.onclick = () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
    closeBtn.classList.add("hide");
}

window.onscroll = () => {
    this.scrollY > 20 ? header.classList.add("sticky") : header.classList.remove("sticky");
}