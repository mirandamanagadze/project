document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navList = document.getElementById("nav-list");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navList.classList.toggle("show");
  });

  // Close when clicking a nav link
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navList.classList.remove("show");
    });
  });
});
