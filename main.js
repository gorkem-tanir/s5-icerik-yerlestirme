// bu satırı silmeyin
import { siteContent } from "./content.js";
console.log("Site içeriği", siteContent);

/* Kodlar buradan aşağıya */

const navLinks = document.querySelectorAll("a");

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].classList.add("italic");
  navLinks[i].textContent = siteContent.nav[Object.keys(siteContent.nav)[i]];
}

document.querySelector(".cta h1").textContent = siteContent.cta.h1;

document.querySelector(".cta button").textContent = siteContent.cta.button;

document.querySelector(".cta img").src = siteContent.images["cta-img"];

document.querySelector("header img").src = siteContent.images["logo-img"];

document.querySelector(".middle-img").src = siteContent.images["accent-img"];
