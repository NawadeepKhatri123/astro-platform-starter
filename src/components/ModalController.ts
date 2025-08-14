
export function initModals() {
  document.querySelectorAll("[data-open]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-open");
      document.getElementById(id)?.classList.remove("hidden");
    });
  });

  document.querySelectorAll("[data-close]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-close");
      document.getElementById(id)?.classList.add("hidden");
    });
  });
}
