// Smooth scrolling for navigation
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Scroll-to-top button
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑ Top";
scrollBtn.id = "scrollTopBtn";
document.body.appendChild(scrollBtn);

// Style for scroll button
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "5px";
scrollBtn.style.background = "#007BFF";
scrollBtn.style.color = "#fff";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";

// Show button on scroll
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

// Scroll to top when clicked
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Fade-in animation for sections
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});
