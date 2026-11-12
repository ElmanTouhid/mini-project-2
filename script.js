console.log("Elman's Portfolio is running!");

// MOBILE NAVIGATION
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

// OPEN AND CLOSE MENU
menuBtn.addEventListener("click", function () {

    mobileMenu.classList.toggle("hidden");

    const isOpen = !mobileMenu.classList.contains("hidden");

    menuBtn.innerHTML = isOpen ? "✕" : "☰";
    menuBtn.setAttribute("aria-expanded", isOpen);

});

// CLOSE MENU AFTER CLICKING A LINK
const mobileLinks = mobileMenu.querySelectorAll("a");

mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mobileMenu.classList.add("hidden");
        menuBtn.innerHTML = "☰";
        menuBtn.setAttribute("aria-expanded", "false");

    });

});