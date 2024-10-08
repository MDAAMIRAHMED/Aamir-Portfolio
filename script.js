var typed = new Typed("#element", {
  strings: [
    "Web Developer",
    "Python Developer",
    "Java Developer",
    "AI/ML Engineer",
  ],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 1000,
  loop: true,
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  if (navLinks.style.display === "block") {
      navLinks.style.display = "none";
  } else {
      navLinks.style.display = "block";
  }
}
