const translate = document.querySelectorAll(".translate");
const menuTitle = document.querySelector(".contact-menu-title");
const header = document.querySelector("header");
const opacity = document.querySelectorAll(".opacity");

let header_height = header.offsetHeight;


window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;


    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height);
    })

    menuTitle.style.opacity = - scroll / (header_height / 2) + 1;
}) 