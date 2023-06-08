const scriptElement1 = document.createElement("script");
scriptElement1.setAttribute("defer", "");
scriptElement1.setAttribute("data-domain", "veghdev.github.io");
scriptElement1.src = "https://plausible.io/js/script.outbound-links.js";

const scriptElement2 = document.createElement("script");
scriptElement2.textContent =
  "window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }";

const headElement = document.getElementsByTagName("head")[0];
headElement.appendChild(scriptElement1);
headElement.appendChild(scriptElement2);

if (window.location.pathname.indexOf("404.html") !== -1) {
  const scriptElement = document.createElement("script");
  scriptElement.textContent =
    'plausible("404",{ props: { path: document.location.pathname } });';

  document.body.appendChild(scriptElement);
}
