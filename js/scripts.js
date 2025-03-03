document.addEventListener("DOMContentLoaded", function () {
  document.documentElement.style.scrollBehavior = "smooth";
});

// Function to load HTML files into elements
function loadHTML(elementId, filePath, callback) {
  fetch(filePath)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
      if (callback) callback(); // Ensure script runs after loading
    })
    .catch((error) => console.error("Error loading " + filePath + ":", error));
}

// Load header and footer
document.addEventListener("DOMContentLoaded", function () {
  loadHTML("header-placeholder", "header.html", initMenu); // Ensure menu initializes after loading
  loadHTML("footer-placeholder", "footer.html");
});

// Function to initialize menu toggle after header loads
function initMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");
  const closeMenu = document.getElementById("close-menu");

  if (menuToggle && sidebar && closeMenu) {
    menuToggle.addEventListener("click", function () {
      sidebar.classList.add("active");
    });

    closeMenu.addEventListener("click", function () {
      sidebar.classList.remove("active");
    });

    document.addEventListener("click", function (event) {
      if (
        !sidebar.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        sidebar.classList.remove("active");
      }
    });
  } else {
    console.error(
      "Menu elements not found. Make sure they are in header.html."
    );
  }
}

// Animation

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
  });
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const navDialog = document.getElementById("nav-dialog");

function handleMenu() {
  navDialog.classList.toggle("hidden");
}

// Validate the form before submission
function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return false;
  }

  // Simple email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return false;
  }

  return true;
}
