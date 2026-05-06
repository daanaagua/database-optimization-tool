(function () {
  function closestMeasureTarget(start) {
    if (!start || typeof start.closest !== "function") return null;
    return start.closest("[data-measure]");
  }

  document.addEventListener("click", function (event) {
    var target = closestMeasureTarget(event.target);
    if (!target || typeof window.gtag !== "function") return;

    window.gtag("event", target.getAttribute("data-measure") || "cta_click", {
      source_page: target.getAttribute("data-source-page") || "",
      slot: target.getAttribute("data-slot") || "",
      link_url: target.href || target.getAttribute("href") || ""
    });
  });
})();
