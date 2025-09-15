/* docs/js/mermaid-init.js */
(function () {
  function runMermaid() {
    if (!window.mermaid) return;
    // Initialize once
    if (!window.__mermaid_inited__) {
      mermaid.initialize({
        startOnLoad: false,   // we trigger manually
        securityLevel: "strict"
      });
      window.__mermaid_inited__ = true;
    }
    // (Re)render all diagrams on the current page
    mermaid.init(undefined, document.querySelectorAll(".mermaid"));
  }

  // First load
  document.addEventListener("DOMContentLoaded", runMermaid);

  // Re-run on every page change (Material for MkDocs hook)
  if (window.document$) {
    document$.subscribe(runMermaid);
  }
})();
