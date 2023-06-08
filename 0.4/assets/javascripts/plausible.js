const plausibleScriptElement1 = document.createElement("script");
plausibleScriptElement1.setAttribute("defer", "");
plausibleScriptElement1.setAttribute("data-domain", "veghdev.github.io");
plausibleScriptElement1.src = "https://plausible.io/js/script.outbound-links.js";

const plausibleScriptElement2 = document.createElement("script");
plausibleScriptElement2.textContent =
  "window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }";

const plausibleHeadElement = document.getElementsByTagName("head")[0];
plausibleHeadElement.appendChild(plausibleScriptElement1);
plausibleHeadElement.appendChild(plausibleScriptElement2);

if (window.location.pathname.indexOf("404.html") !== -1) {
  const plausibleScriptElement404 = document.createElement("script");
  plausibleScriptElement404.textContent =
    'plausible("404",{ props: { path: document.location.pathname } });';

  document.body.appendChild(plausibleScriptElement404);
}
