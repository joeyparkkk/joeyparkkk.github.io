// JS for responsive menu demo
// file renamed to "scripts.js" (plural) after the demo

function clickNav(bodyClicked) {
    let navHandle = document.querySelector("nav");
    let burgerWasClicked = navHandle.classList.contains("clicked");
    if (!bodyClicked) navHandle.classList.toggle("clicked");
    else navHandle.classList.remove("clicked");

    if (burgerWasClicked || bodyClicked) {
        let allMenus = document.querySelectorAll("nav > ul > li");
        for (const eachMenu of allMenus) {
            eachMenu.classList.remove("clicked");
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#navBurger").addEventListener("click", function (e) {
        clickNav(false);
    });

    let allMenus = document.querySelectorAll("nav > ul > li");
    for (const eachMenu of allMenus) {
        eachMenu.addEventListener("click", function (e) {
            let wasClicked = eachMenu.classList.contains("clicked");
            let allMenus2 = document.querySelectorAll("nav > ul > li");
            for (const eachMenu2 of allMenus2) {
                eachMenu2.classList.remove("clicked");
            }
            if (!wasClicked) {
                eachMenu.classList.add("clicked");
            }
        });
    }

    document.querySelector("html").addEventListener("click", function (e) {
        if (!e.target.closest("nav")) {
            clickNav(true);
        }
    });
});