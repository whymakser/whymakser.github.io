document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const pre = btn.previousElementSibling;
      if (!pre) return;

      navigator.clipboard.writeText(pre.innerText).then(() => {
        const original = btn.textContent;
        btn.textContent = "Copied!";
        setTimeout(() => btn.textContent = original, 1500);
      });
    });
  });
});