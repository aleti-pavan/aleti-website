const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("#nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
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
    const message = encodeURIComponent(String(formData.get("message") || ""));
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
    window.location.href = `mailto:info@aleti.io?subject=ALETI%20website%20enquiry&body=${body}`;
  });
}
