(function () {
  var header = document.querySelector(".site-header");
  var button = document.querySelector(".nav-toggle");
  if (!header || !button) return;
  button.addEventListener("click", function () {
    var open = header.classList.toggle("is-open");
    button.setAttribute("aria-expanded", open ? "true" : "false");
  });
})();
