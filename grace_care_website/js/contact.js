"use strict";

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

if (!(contactForm instanceof HTMLFormElement) || !(formStatus instanceof HTMLElement)) {
  throw new Error("The contact form or status message is missing from the page.");
}

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactForm.reportValidity()) {
    return;
  }

  const formData = new FormData(contactForm);
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const subject = encodeURIComponent(`Website enquiry from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

  formStatus.textContent = "Opening your email app with the enquiry. The message has not been sent yet.";
  window.location.href = `mailto:info@blossomcare.com?subject=${subject}&body=${body}`;
});
