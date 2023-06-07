// Create the first script element
var scriptElement1 = document.createElement('script');
scriptElement1.setAttribute('defer', '');
scriptElement1.setAttribute('data-domain', 'veghdev.github.io');
scriptElement1.src = 'https://plausible.io/js/script.outbound-links.js';

// Create the second script element
var scriptElement2 = document.createElement('script');
scriptElement2.textContent = 'window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }';

// Append the script elements to the head
var headElement = document.getElementsByTagName('head')[0];
headElement.appendChild(scriptElement1);
headElement.appendChild(scriptElement2);
