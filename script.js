
console.log("Elman's Portfolio is running!");

// MOBILE NAVIGATION
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

// TOGGLE MENU
menuBtn.addEventListener("click", function () {

    const isOpen = mobileMenu.classList.contains("hidden");

    if (isOpen) {
        mobileMenu.classList.remove("hidden");
        mobileMenu.classList.add("flex");
    } else {
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("flex");
    }

    const menuIsOpen = !mobileMenu.classList.contains("hidden");

    menuBtn.innerHTML = menuIsOpen ? "✕" : "☰";
    menuBtn.setAttribute("aria-expanded", menuIsOpen);

});

// CLOSE MENU AFTER CLICKING A LINK
const mobileLinks = mobileMenu.querySelectorAll("a");

mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("flex");

        menuBtn.innerHTML = "☰";
        menuBtn.setAttribute("aria-expanded", "false");

    });

});
