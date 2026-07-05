const words = [
  "B.Tech CSE (AIML) Student",
  "AI & ML Enthusiast",
  "Web Developer",
  "Python Programmer",
  "Open to Internships"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function type() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex++);
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = 100;

    if (!isDeleting && charIndex === currentWord.length + 1) {
        speed = 1500;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(type, speed);
}

type();
// Scroll Reveal

const hiddenElements = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach((el)=>{
    el.classList.add("hidden");
    observer.observe(el);
});
// Navbar Color Change

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.background = "rgba(17,24,39,0.9)";
        nav.style.backdropFilter = "blur(10px)";
    } else {
        nav.style.background = "#111827";
        nav.style.backdropFilter = "none";
    }

});
// Active Navbar Link

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});