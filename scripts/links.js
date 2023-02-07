const urllink = 'scripts/links.json';
const card = document.querySelector("#links");

async function getLinks() {
  const response = await fetch(urllink);
  const data = await response.json();
  displayLinks(data);
}

getLinks();

function displayLinks(data) {
    
  console.log(data);

    const unorderedLi = document.createElement("ul");
    const week01 = document.createElement("li");
    const week02 = document.createElement("li");
    const week03 = document.createElement("li");
    const week04 = document.createElement("li");
    const week05 = document.createElement("li");
    const week06 = document.createElement("li");

    /*Assignments titles

    Week01 : Holy Grail, Media Query
    Week02: Design, Responsive "Hamburger" Menu, DOM Manipulation
    Week03: WebP, lazy Load, Responsive Website - srcset, Web Store API - LocalStorage
    Week04: 
    Week05: CSS Pseudo Elements, JSON ward members, Prophets Fetch API, Weather
    Week06: 
    */

    week01.innerHTML = `Week01: <a href="${data.week01[0]}">Holy Grail</a> | <a href="${data.week01[1]}">Media Query</a>`;
    week02.innerHTML = `Week02: <a href="${data.week02[0]}">Design Principles</a> | <a href="${data.week02[1]}">Responsive "Hamburger" Menu</a> | <a href="${data.week02[2]}">DOM Manipulation</a>`;
    week03.innerHTML = `Week03: <a href="${data.week03[0]}">Landscape Webp</a> | <a href="${data.week03[1]}">Lazy Load</a> | <a href="${data.week02[2]}">Responsive Website - srcset</a> | <a href="${data.week02[3]}">Web Store API - LocalStorage</a>`;
    week04.innerHTML = `Week04: <a href="${data.week04[0]}">CSS Pseudo-Class</a> | <a href="${data.week04[1]}">CSS Combinations</a> | <a href="${data.week04[2]}">HTML Tables for Data Presentation</a> | <a href="${data.week04[3]}"> HTML Forms</a>`;
    week05.innerHTML = `Week05: <a href="${data.week05[0]}">CSS Pseudo Elements</a> | <a href="${data.week05[1]}">JSON Ward Members</a> | <a href="${data.week05[2]}">Prophets Fetch API</a> | <a href="${data.week05[3]}">Weather</a>`;
    week06.innerHTML = `Week06: `;

    unorderedLi.appendChild(week01);
    unorderedLi.appendChild(week02);
    unorderedLi.appendChild(week03);
    unorderedLi.appendChild(week04);
    unorderedLi.appendChild(week05);
    unorderedLi.appendChild(week06);
    card.appendChild(unorderedLi);

}

