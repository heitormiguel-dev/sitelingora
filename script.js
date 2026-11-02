// Insira somente os números do WhatsApp, com código do país e DDD.
// Exemplo de formato: 5562999999999 (não use +, espaços ou traços).
const WHATSAPP_NUMBER = "5562982822802";

const contactButton = document.querySelector("#contact-button");
const contactNote = document.querySelector("#contact-note");

if (WHATSAPP_NUMBER.trim()) {
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre as aulas da Lingora.");
  contactButton.href = `https://wa.me/${WHATSAPP_NUMBER.trim()}?text=${message}`;
  contactButton.target = "_blank";
  contactButton.rel = "noopener noreferrer";
  contactNote.textContent = "Atendimento pelo WhatsApp.";
} else {
  contactButton.addEventListener("click", (event) => {
    event.preventDefault();
    contactNote.textContent = "O WhatsApp ainda não foi configurado. Adicione o número no arquivo script.js.";
  });
}

document.querySelector("#year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
});
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
