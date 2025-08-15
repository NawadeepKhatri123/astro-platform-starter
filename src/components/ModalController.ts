
export function initModals() {
  // Open modal
  document.querySelectorAll("[data-open]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-open");
      const modal = document.getElementById(id) as HTMLDialogElement | null;
      if (modal && typeof modal.showModal === "function") {
        modal.showModal();
      }
    });
  });

  // Close modal
  document.querySelectorAll("[data-close]").forEach(btn => {
    btn.addEventListener("click", () => {
      const modal = btn.closest("dialog") as HTMLDialogElement | null;
      if (modal && typeof modal.close === "function") {
        modal.close();
      }
    });
  });
}

