const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("#nav-menu");
const servicesButton = document.querySelector(".nav-dropdown-button");
const servicesMenu = document.querySelector("#services-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      servicesMenu?.classList.remove("is-open");
      servicesButton?.setAttribute("aria-expanded", "false");
    }
  });
}

if (servicesButton && servicesMenu) {
  servicesButton.addEventListener("click", () => {
    const isOpen = servicesMenu.classList.toggle("is-open");
    servicesButton.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Node)) {
      return;
    }
    if (!servicesMenu.contains(target) && !servicesButton.contains(target)) {
      servicesMenu.classList.remove("is-open");
      servicesButton.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      servicesMenu.classList.remove("is-open");
      servicesButton.setAttribute("aria-expanded", "false");
    }
  });
}

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    const action = contactForm.getAttribute("action") || "";
    if (!action.includes("your-form-id")) {
      return;
    }

    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = encodeURIComponent(String(formData.get("name") || ""));
    const email = encodeURIComponent(String(formData.get("email") || ""));
    const company = encodeURIComponent(String(formData.get("company") || ""));
    const message = encodeURIComponent(String(formData.get("message") || ""));
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0ACompany: ${company}%0D%0A%0D%0A${message}`;
    window.location.href = `mailto:info@aleti.io?subject=ALETI%20website%20enquiry&body=${body}`;
  });
}
