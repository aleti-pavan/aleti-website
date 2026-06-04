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
  const formStatus = contactForm.querySelector("#form-status");
  const submitButton = contactForm.querySelector("button[type='submit']");

  const showFormStatus = (type, html) => {
    if (!formStatus) {
      return;
    }
    formStatus.className = `form-status form-status-${type}`;
    formStatus.innerHTML = html;
    formStatus.hidden = false;
  };

  const buildEnquiry = (formData) => {
    const fields = [
      ["Name", formData.get("name")],
      ["Email", formData.get("email")],
      ["Company", formData.get("company")],
      ["Primary area", formData.get("service")],
      ["Source", formData.get("source")]
    ];
    const message = String(formData.get("message") || "").trim();
    const summary = fields
      .filter(([, value]) => String(value || "").trim())
      .map(([label, value]) => `${label}: ${String(value).trim()}`)
      .join("\n");

    return `${summary}\n\nMessage:\n${message}`;
  };

  const getEndpoint = () => {
    const endpoint = contactForm.getAttribute("data-form-endpoint") || contactForm.getAttribute("action") || "";
    if (
      !endpoint ||
      endpoint.includes("your-form-id") ||
      endpoint.startsWith("mailto:") ||
      endpoint.startsWith("#") ||
      endpoint.startsWith("?")
    ) {
      return "";
    }
    return endpoint;
  };

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    const formData = new FormData(contactForm);
    const endpoint = getEndpoint();
    const contactEmail = contactForm.getAttribute("data-contact-email") || "info@aleti.io";
    const enquiry = buildEnquiry(formData);
    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent("ALETI website enquiry")}&body=${encodeURIComponent(enquiry)}`;
    if (formStatus) {
      formStatus.dataset.enquiry = enquiry;
    }

    if (endpoint && submitButton instanceof HTMLButtonElement) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";

      try {
        const response = await fetch(endpoint, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" }
        });

        if (!response.ok) {
          throw new Error("Form endpoint rejected the enquiry.");
        }

        contactForm.reset();
        showFormStatus("success", "<strong>Thanks, your enquiry has been sent.</strong><span>ALETI will review it and respond with the next step.</span>");
      } catch (error) {
        showFormStatus(
          "warning",
          `<strong>We could not send this automatically.</strong><span>Your enquiry is still ready. You can email it or copy the details below.</span><div class="form-actions"><a class="button button-secondary" href="${mailto}">Open email</a><button class="button button-secondary copy-enquiry" type="button">Copy enquiry</button></div>`
        );
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = "Request consultation";
      }
      return;
    }

    showFormStatus(
      "success",
      `<strong>Thanks, your enquiry is ready.</strong><span>To keep you on the website, we have prepared the message here. Email it to ALETI or copy it for later.</span><div class="form-actions"><a class="button button-secondary" href="${mailto}">Open email</a><button class="button button-secondary copy-enquiry" type="button">Copy enquiry</button></div>`
    );
  });

  contactForm.addEventListener("click", async (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement) || !target.classList.contains("copy-enquiry") || !formStatus) {
      return;
    }

    const enquiry = formStatus.dataset.enquiry || "";
    if (!enquiry) {
      return;
    }

    try {
      await navigator.clipboard.writeText(enquiry);
      target.textContent = "Copied";
    } catch (error) {
      target.textContent = "Select and copy";
    }
  });
}
