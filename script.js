function openWhatsApp() {
    window.open("https://wa.me/2203383286", "_blank");
}

let slides = document.querySelectorAll(".slide");
let index = 0;

let current = document.getElementById("current");
let total = document.getElementById("total");

total.innerText = slides.length;

document.querySelector(".next").onclick = () => {
    index = (index + 1) % slides.length;
    showSlide(index);
};

document.querySelector(".prev").onclick = () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
};

let flavours = document.querySelectorAll(".flavour");

function showSlide(i) {
    slides.forEach(s => s.classList.remove("active"));
    slides[i].classList.add("active");

    // update counter
    current.innerText = i + 1;

    // update flavour nav
    flavours.forEach(f => f.classList.remove("active"));
    flavours[i].classList.add("active");
}

function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
}

let startX = 0;
let endX = 0;

const slider = document.querySelector(".premium-slider");

/* TOUCH START */
slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

/* TOUCH MOVE */
slider.addEventListener("touchmove", (e) => {
    endX = e.touches[0].clientX;
});

/* TOUCH END */
slider.addEventListener("touchend", () => {

    let diff = startX - endX;

    // SWIPE LEFT (next)
    if (diff > 50) {
        index = (index + 1) % slides.length;
        showSlide(index);
    }

    // SWIPE RIGHT (prev)
    else if (diff < -50) {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
    }

});