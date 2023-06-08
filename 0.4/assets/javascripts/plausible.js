let plausibleHead1 = document.createElement("script");
plausibleHead1.setAttribute("defer", "");
plausibleHead1.setAttribute("data-domain", "veghdev.github.io");
plausibleHead1.src = "https://plausible.io/js/script.outbound-links.js";

let plausibleHead2 = document.createElement("script");
plausibleHead2.textContent =
  "window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }";

let headElement = document.getElementsByTagName("head")[0];
headElement.appendChild(plausibleHead1);
headElement.appendChild(plausibleHead2);

if (window.location.pathname.indexOf("404.html") !== -1) {
  let plausibleBody1 = document.createElement("script");
  plausibleBody1.textContent =
    'plausible("404",{ props: { path: document.location.pathname } });';

  document.body.appendChild(plausibleBody1);
}
