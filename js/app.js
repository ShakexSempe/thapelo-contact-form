// VARIABLES
const navList = document.querySelector('.nav-list');
const body = document.getElementById("container");
const date = document.getElementById("date");
const toggle = document.getElementById("toggle");
const navItem = document.querySelectorAll(".nav-link");
const infoBtn = document.querySelectorAll(".info-btn");
const infoSection = document.querySelector('.info-section');
console.log(navItem);
// date
date.innerHTML = new Date().getFullYear();

// hamburger
toggle.addEventListener("click", () => {

    navList.classList.toggle("active");
    toggle.classList.toggle("active");
    body.classList.toggle("dim");
});

// nav items 
navItem.forEach(item => {
    item.addEventListener("click", () => {
        navList.classList.toggle("active");
        toggle.classList.toggle("active");
        body.classList.toggle("dim");

    })
});

// info btn 
infoBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        infoSection.classList.toggle("active");
    })
});

// ********** HERO SECTION INTERSECTION OBSERVER ************
const header = document.querySelector('header');
const topBtn = document.querySelector('.top-btn');
const hero = document.getElementById('hero');
const heroOptions = {
    rootMargin: '-95% 0px 0px 0px',
}
const heroObserver = new IntersectionObserver(
    function(
        entries, heroObserver
    ) {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                topBtn.classList.add("active-top");
                console.log("HERO NOT IO");
            } else {
                topBtn.classList.remove("active-top");
                console.log("HERO IS IO");
            }
        });
    }, heroOptions
); 
heroObserver.observe(hero);