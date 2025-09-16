// Initialize Mermaid and re-run after Material's instant navigation
(function () {
  function initMermaid() {
    if (!window.mermaid) return;
    try {
      const scheme = document.documentElement.getAttribute("data-md-color-scheme");
      const theme = scheme === "slate" ? "dark" : "default";
      window.mermaid.initialize({ startOnLoad: false, theme });
      window.mermaid.run({ querySelector: ".mermaid" });
    } catch (e) {
      console.error("Mermaid init failed:", e);
    }
  }
  document.addEventListener("DOMContentLoaded", initMermaid);
  if (window.document$) {
    window.document$.subscribe(initMermaid);
  }
})();
