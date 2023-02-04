const urlMembers = "/chamber/data/members.json";
const members = document.querySelector('#grid');

async function getMembersData() {
    const response = await fetch(urlMembers);
    const data = await response.json();
    displayMembers(data.companies);
  }
  
  getMembersData();

function displayMembers(data) {
    console.log(data);

    
    data.forEach((companies) => {
    //Creating elements
    const section = document.createElement("section");
    const title = document.createElement("h3");
    const address = document.createElement("p");
    const numbers = document.createElement("p");
    const weburl = document.createElement("a");
    const imgurl = document.createElement("img");
    const membership = document.createElement("p");
    const opening = document.createElement("p");
    const hr = document.createElement("hr");

    title.textContent = companies.name;
    address.textContent = companies.address;
    numbers.textContent = companies.number;
    imgurl.src = companies.imgurl;
    imgurl.setAttribute('loading', 'lazy');
    imgurl.setAttribute('width', '120');
    imgurl.setAttribute('height', '100');
    weburl.href = companies.url;
    weburl.innerHTML = "Visit here";
    membership.innerHTML = `Membership level: ${companies.membership}`;
    opening.innerHTML = `Opening Hours: ${companies.openingHours}`;

    //Displaying companies

  
    section.appendChild(title);
    section.appendChild(address);
    section.appendChild(numbers);
    section.appendChild(imgurl);
    section.appendChild(weburl);
    section.appendChild(membership);
    section.append(opening);
    section.appendChild(hr);

    members.appendChild(section);
    })
}