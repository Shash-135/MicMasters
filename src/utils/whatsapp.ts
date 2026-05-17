export const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.currentTarget;
  const formData = new FormData(form);
  const recipient = form.getAttribute("data-whatsapp-recipient") || "919921362708";
  const prefix = form.getAttribute("data-whatsapp-prefix") || "New enquiry from Mic Masters website";
  const lines = [prefix, ""];

  formData.forEach((value, key) => {
    const label = key
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase());
    lines.push(`${label}: ${value}`);
  });

  window.open(`https://wa.me/${recipient}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
  form.reset();
};
