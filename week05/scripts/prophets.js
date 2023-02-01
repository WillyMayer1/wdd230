const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
  }
  
  getProphetData();


function displayProphets(prophets) {
    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let infoDate = document.createElement('p');
        let infoPlace = document.createElement('p');

        // Build the h2 content out to show the prophet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`; // fill in the blank

        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
        infoDate.innerHTML = `<span class="label">Birth:</span> ${prophet.birthdate}`;
        infoPlace.innerHTML = `<span class="label">Place:</span> ${prophet.birthplace}`;
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append the section(card) with the created elements
        card.appendChild(fullName); //fill in the blank
        card.appendChild(infoDate);
        card.appendChild(infoPlace);
        card.appendChild(portrait);

        cards.appendChild(card);
    }); // end of arrow function and forEach loop
}