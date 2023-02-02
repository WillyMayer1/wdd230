const url = 'scripts/links.json';

async function getLinks() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  displayLinks(data);
}

getLinks();

function displayLinks(data) {
  
}