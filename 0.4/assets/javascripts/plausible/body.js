if (window.location.pathname.indexOf("404.html") !== -1) {
  const plausible404 = document.createElement("script");
  plausible404.textContent =
    'plausible("404",{ props: { path: document.location.pathname } });';

  document.body.appendChild(plausible404);
}
